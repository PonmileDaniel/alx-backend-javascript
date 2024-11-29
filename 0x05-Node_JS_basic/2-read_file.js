const fs = require('fs');

function countStudents(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf-8');

    // Split the file content into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const header = lines.shift();
    if (!header) throw new Error('File format is invalid');

    const fields = {};
    lines.forEach((line) => {
      const parts = line.split(',');
      if (parts.length > 1) {
        const firstName = parts[0].trim();
        const field = parts[3].trim();
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      }
    });

    console.log(`Number of students: ${lines.length}`);
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
