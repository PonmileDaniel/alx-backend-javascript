const express = require('express');
const fs = require('fs').promises;

// Function to count students from a CSV file
async function countStudents(databasePath) {
  try {
    const data = await fs.readFile(databasePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim().length > 0);

    const students = lines.slice(1).map((line) => line.split(','));
    const studentCount = students.length;

    let output = `Number of students: ${studentCount}\n`;

    const fields = {};
    for (const student of students) {
      const [firstname, , , field] = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    for (const [field, names] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Create the Express app
const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  res.set('Content-Type', 'text/plain');

  res.write('This is the list of our students\n');
  try {
    const studentData = await countStudents(databasePath);
    res.end(studentData);
  } catch (error) {
    res.end(error.message);
  }
});

// Start the server on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
