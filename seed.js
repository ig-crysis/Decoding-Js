const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./server/models/Course'); // Ensure this path is correct

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const seedCourses = async () => {
  try {
    await Course.deleteMany(); // Optional: Clears existing courses

    const courses = [
      {
        title: 'JSMD',
        chapters: [
          { title: '1.1 How JavaScript Works', filePath: 'public/JSMD/1.1 How JavaScript Works.md' },
          { title: '1.2 Execution of JS Code', filePath: 'public/JSMD/1.2 Execution of JS Code.md' },
          { title: '1.3 Hoisting in JavaScript', filePath: 'public/JSMD/1.3 Hoisting in JavaScript.md' },
          { title: '1.4 How Functions Work in JavaScript', filePath: 'public/JSMD/1.4 How Functions Work in JavaScript.md' },
          { title: '1.5 Window and This Keyword in JS', filePath: 'public/JSMD/1.5 Window and This Keyword in JS.md' },
          { title: '1.6 Undefined Vs Not Defined in JavaScript', filePath: 'public/JSMD/1.6 Undefined Vs Not Defined in JavaScript.md' },
          { title: '1.7 Scope Chain & Lexical Environment', filePath: 'public/JSMD/1.7 Scope Chain & Lexical Environment.md' },
          { title: '1.8 Let and Const in JavaScript', filePath: 'public/JSMD/1.8 Let and Const in JavaScript.md' },
          { title: '1.9 Block Scope and Shadowing in JavaScript', filePath: 'public/JSMD/1.9 Block Scope and Shadowing in JavaScript.md' },
          { title: '1.10 Closures in JavaScript', filePath: 'public/JSMD/1.10 Closures in JavaScript.md' },
          { title: '1.11 setTimeout + Closures in JavaScript', filePath: 'public/JSMD/1.11 setTimeout + Closures in JavaScript.md' },
          { title: '1.12 First Class Functions and Anonymous Functions', filePath: 'public/JSMD/1.12 First Class Functions and Anonymous Functions.md' },
          { title: '1.13 Callback Function in JavaScript', filePath: 'public/JSMD/1.13 Callback Function in JavaScript.md' },
          { title: '1.14 Asynchronous JavaScript & Event Loop in JS', filePath: 'public/JSMD/1.14 Asynchronous JavaScript & Event Loop in JS.md' },
          { title: '1.15 JavaScript Engine & Google V8 Architecture', filePath: 'public/JSMD/1.15 JavaScript Engine & Google V8 Architecture.md' },
          { title: '1.16 setTimeout() issue in JavaScript', filePath: 'public/JSMD/1.16 setTimeout() issue in JavaScript.md' },
          { title: '1.17 Higher Order Functions and Functional Programming', filePath: 'public/JSMD/1.17 Higher Order Functions and Functional Programming.md' },
          { title: '1.18 Map, Filter and Reduce', filePath: 'public/JSMD/1.18 Map, Filter and Reduce.md' },
          { title: '1.19 Callback Hell in JavaScript', filePath: 'public/JSMD/1.19 - Callback Hell in JavaScript.md' },
          { title: '1.20 Promises, Promise Chaining, Promise APIs and Error Handling', filePath: 'public/JSMD/1.20 - Promises, Promise Chaining, Promise APIs and Error Handling.md' },
          { title: '1.21 Async and Await', filePath: 'public/JSMD/1.21 Async and Await.md' }
        ]
      },
      {
        title: 'HTMLMD',
        chapters: [
          { title: 'Introduction to HTML', filePath: 'public/HTMLMD/1.1 Introduction.md' }
        ]
      },
      {
        title: 'CSSMD',
        chapters: [
          { title: 'CSS Basics', filePath: 'public/CSSMD/1.1 CSS Basics.md' }
        ]
      }
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
