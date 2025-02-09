const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const Course = require('../models/Course');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Temporary storage

router.post('/courses', upload.single('mdFile'), async (req, res) => {
  const { courseTitle, chapterTitle } = req.body;
  const mdFile = req.file;

  try {
    if (!courseTitle || !chapterTitle || !mdFile) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log(`Creating course: ${courseTitle}, Chapter: ${chapterTitle}`);

    const courseFolder = path.join(process.cwd(), `public/${courseTitle}`);
    if (!fs.existsSync(courseFolder)) {
      fs.mkdirSync(courseFolder);
    }

    // ✅ Correctly define fileName before using it
    const fileName = `${chapterTitle}.md`;
    const filePath = path.join(courseFolder, fileName);

    fs.renameSync(mdFile.path, filePath);

    // Convert absolute path to relative
    const relativeFilePath = `public/${courseTitle}/${fileName}`;
    console.log(`File saved at: ${relativeFilePath}`);

    let course = await Course.findOne({ title: courseTitle });
    if (!course) {
      course = new Course({
        title: courseTitle,
        chapters: [{ title: chapterTitle, filePath: relativeFilePath }]
      });
    } else {
      course.chapters.push({ title: chapterTitle, filePath: relativeFilePath });
    }

    await course.save();
    console.log(`Course saved successfully: ${courseTitle}`);
    res.json({ message: 'Course added successfully!' });

  } catch (error) {
    console.error('Error in adding course:', error);
    res.status(500).json({ error: 'Failed to add course' });
  }
});


router.get('/courses/:courseName', async (req, res) => {
  const { courseName } = req.params;

  try {
    const course = await Course.findOne({ title: courseName });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json({ chapters: course.chapters });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});
//Edit Chapter
router.put('/courses/:courseName/editChapter', upload.single('newMdFile'), async (req, res) => {
  const { courseName } = req.params;
  const { oldTitle, newTitle } = req.body;
  const newFile = req.file;

  try {
    const course = await Course.findOne({ title: courseName });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Find the chapter to edit
    const chapterIndex = course.chapters.findIndex(ch => ch.title === oldTitle);
    if (chapterIndex === -1) {
      return res.status(404).json({ error: 'Chapter not found' });
    }

    // Define the new file path (relative)
    let newFilePath = `public/${courseName}/${newTitle}.md`;

    // If a new file is uploaded, replace the file
    if (newFile) {
      const absoluteNewFilePath = path.join(process.cwd(), newFilePath);
      fs.renameSync(newFile.path, absoluteNewFilePath);
    } else {
      // If only the title is updated, rename the existing file
      const oldFilePath = path.join(process.cwd(), `public/${courseName}/${oldTitle}.md`);
      const updatedFilePath = path.join(process.cwd(), newFilePath);

      if (fs.existsSync(oldFilePath)) {
        fs.renameSync(oldFilePath, updatedFilePath);
      }
    }

    // Update MongoDB with the new title and correct relative path
    course.chapters[chapterIndex].title = newTitle;
    course.chapters[chapterIndex].filePath = newFilePath;

    await course.save();
    res.json({ message: 'Chapter updated successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update chapter' });
  }
});


router.delete('/courses/:courseName/deleteChapter', async (req, res) => {
  const { courseName } = req.params;
  const { chapterTitle } = req.body;

  try {
    const course = await Course.findOne({ title: courseName });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Find the chapter index
    const chapterIndex = course.chapters.findIndex(ch => ch.title === chapterTitle);
    if (chapterIndex === -1) {
      return res.status(404).json({ error: 'Chapter not found' });
    }

    // Get the file path and delete the markdown file
    const filePath = course.chapters[chapterIndex].filePath;
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Remove the chapter from the array
    course.chapters.splice(chapterIndex, 1);

    // If no chapters left, delete the entire course
    if (course.chapters.length === 0) {
      await Course.deleteOne({ title: courseName });
      res.json({ message: 'Course deleted as there were no chapters left' });
    } else {
      await course.save();
      res.json({ message: 'Chapter deleted successfully!' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete chapter' });
  }
});
router.post('/courses/:courseName/addChapter', upload.single('mdFile'), async (req, res) => {
  const { courseName } = req.params;
  const { chapterTitle } = req.body;
  const mdFile = req.file;

  try {
    const course = await Course.findOne({ title: courseName });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Ensure course folder exists
    const courseFolder = path.join(process.cwd(), `public/${courseName}`);
    if (!fs.existsSync(courseFolder)) {
      fs.mkdirSync(courseFolder);
    }

    // ✅ Correct file path handling
    const fileName = `${chapterTitle}.md`.trim(); // Trim to avoid spaces at the end
    const filePath = path.join(courseFolder, fileName);
    fs.renameSync(mdFile.path, filePath);

    // ✅ Store RELATIVE path instead of absolute
    const relativeFilePath = `public/${courseName}/${fileName}`;

    // Update MongoDB
    course.chapters.push({ title: chapterTitle, filePath: relativeFilePath });
    await course.save();

    console.log(`Chapter added successfully: ${chapterTitle}`);
    res.json({ message: 'Chapter added successfully!' });
  } catch (error) {
    console.error('Error in adding chapter:', error);
    res.status(500).json({ error: 'Failed to add chapter' });
  }
});

router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find({}, 'title'); // Fetch only course titles
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});
router.delete('/courses/:courseName', async (req, res) => {
  const { courseName } = req.params;

  try {
    const course = await Course.findOne({ title: courseName });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Delete all associated markdown files
    const courseFolder = path.join(process.cwd(), `public/${courseName}`);
    if (fs.existsSync(courseFolder)) {
      fs.rmSync(courseFolder, { recursive: true, force: true }); // Delete entire folder
    }

    // Remove the course from MongoDB
    await Course.deleteOne({ title: courseName });

    res.json({ message: 'Course deleted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete course' });
  }
});


module.exports = router;
