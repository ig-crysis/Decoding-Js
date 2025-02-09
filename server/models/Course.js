const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  filePath: { type: String, required: true }
});

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  chapters: [ChapterSchema]
});

module.exports = mongoose.model('Course', CourseSchema);
