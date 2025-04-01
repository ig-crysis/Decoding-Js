const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./server/models/Course'); // Ensure this path is correct

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const seedCourses = async () => {
  try {
    //await Course.deleteMany(); // Optional: Clears existing courses

    const courses = [
      // {
      //   title: 'CSSMD',
      //   chapters: [
      //     { title: 'Introduction to CSS', filePath: 'public/CSSMD/Introduction to CSS.md' }
      //   ]
      // },
      {
        title: 'PYMD',
        chapters: [
          { title: 'Python Basics', filePath: 'public/PYMD/Python_Basics_1.md' },
          { title: 'Data Structures & Functions', filePath: 'public/PYMD/Python_Data_Structures_Functions_2.md' },
          { title: 'Object Oriented Programming', filePath: 'public/PYMD/Python_OOP_3.md' },
          { title: 'Python for Software Development', filePath: 'public/PYMD/Python_Software_Development_4.md' },
          { title: 'Python for Data Analysis and Data Science', filePath: 'public/PYMD/Python_Data_Analysis_Science_5.md' },
          { title: 'Python for Machine Learning(ML)', filePath: 'public/PYMD/Python_Machine_Learning_6.md' }
        ]
      },
      {
        title: 'CSSMD',
        chapters: [
          { title: 'CSS Introduction', filePath: 'public/CSSMD/Introduction to CSS.md' },
          { title: 'The CSS Box Model', filePath: 'public/CSSMD/The_CSS_Box_Model.md' },
          { title: 'CSS Selectors', filePath: 'public/CSSMD/CSS_Selectors.md' },
    { title: 'CSS Colors and Backgrounds', filePath: 'public/CSSMD/CSS_Colors_and_Backgrounds.md' },
    { title: 'CSS Typography', filePath: 'public/CSSMD/CSS_Typography.md' },
    { title: 'Flexbox', filePath: 'public/CSSMD/CSS_Flexbox.md' },
    { title: 'Grid', filePath: 'public/CSSMD/CSS_Grid.md' },
    { title: 'CSS Animations', filePath: 'public/CSSMD/CSS_Animations.md' },
    { title: 'Responsive Design', filePath: 'public/CSSMD/CSS_Responsive_Design.md' }
        ]
      },
      
    ];

    await Course.insertMany(courses);
    console.log('Database seeded with existing courses.');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedCourses();
