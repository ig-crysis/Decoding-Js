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
    // Create course folder if it doesn't exist
    const courseFolder = path.join(process.cwd(), `public/${courseTitle}`);
    if (!fs.existsSync(courseFolder)) {
      fs.mkdirSync(courseFolder);
    }

    // Move uploaded file to course folder
    const filePath = path.join(courseFolder, `${chapterTitle}.md`);
    fs.renameSync(mdFile.path, filePath);

    // Save course & chapter info to MongoDB
    let course = await Course.findOne({ title: courseTitle });
    if (!course) {
      course = new Course({
        title: courseTitle,
        chapters: [{ title: chapterTitle, filePath: filePath.replace(/\\/g, '/') }]
      });
    } else {
      course.chapters.push({ title: chapterTitle, filePath: filePath.replace(/\\/g, '/') });
    }
    await course.save();

    res.json({ message: 'Course added successfully!' });
  } catch (error) {
    console.error(error);
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
router.put('/courses/:courseName/editChapter', upload.single('newMdFile'), async (req, res) => {
  const { courseName } = req.params;
  const { oldTitle, newTitle } = req.body;
  const newFile = req.file;

  try {
    const course = await Course.findOne({ title: courseName });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Find the correct chapter
    const chapterIndex = course.chapters.findIndex(ch => ch.title === oldTitle);
    if (chapterIndex === -1) {
      return res.status(404).json({ error: 'Chapter not found' });
    }

    // Construct the new file path
    let newFilePath = course.chapters[chapterIndex].filePath;
    
    // If a new file is uploaded, update the file path
    if (newFile) {
      newFilePath = path.join(process.cwd(), `public/${courseName}/${newTitle}.md`);
      fs.renameSync(newFile.path, newFilePath);
      newFilePath = newFilePath.replace(/\\/g, '/'); // Normalize path for cross-platform
    } else {
      // Rename the existing file to match the new title
      const oldFilePath = path.join(process.cwd(), `public/${courseName}/${oldTitle}.md`);
      const updatedFilePath = path.join(process.cwd(), `public/${courseName}/${newTitle}.md`);

      if (fs.existsSync(oldFilePath)) {
        fs.renameSync(oldFilePath, updatedFilePath);
      }

      newFilePath = updatedFilePath.replace(/\\/g, '/');
    }

    // Update the chapter details in MongoDB
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

    // Ensure the course folder exists
    const courseFolder = path.join(process.cwd(), `public/${courseName}`);
    if (!fs.existsSync(courseFolder)) {
      fs.mkdirSync(courseFolder);
    }

    // Move uploaded file to course folder
    const filePath = path.join(courseFolder, `${chapterTitle}.md`);
    fs.renameSync(mdFile.path, filePath);

    // Add the new chapter to MongoDB
    course.chapters.push({ title: chapterTitle, filePath: filePath.replace(/\\/g, '/') });
    await course.save();

    res.json({ message: 'Chapter added successfully!' });
  } catch (error) {
    console.error(error);
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
