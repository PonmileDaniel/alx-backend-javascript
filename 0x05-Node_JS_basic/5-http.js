const http = require('http');
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

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    try {
      const studentData = await countStudents(databasePath);
      res.end(studentData);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// The server listens on port 1245
app.listen(1245);

module.exports = app;
