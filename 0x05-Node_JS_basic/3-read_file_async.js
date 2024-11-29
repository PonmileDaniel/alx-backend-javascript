const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1);
    const studentCount = students.length;

    if (studentCount === 0) {
      console.log('Number of students: 0');
      return;
    }

    console.log(`Number of students: ${studentCount}`);

    const fields = {};

    students.forEach((line) => {
      const [firstName, , field] = line.split(',');
      if (fields[field]) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }
    });

    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
