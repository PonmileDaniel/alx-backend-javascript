// Define the student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 21,
	location: 'Lagos'
}

const student2: Student = {
	firstName: 'Jane',
	lastName: 'Ndukwe',
	age: 31,
	location: 'Imo'
};

//Add students to an array
const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');

// Iterate through the studentsList and create table rows
studentsList.forEach((student) => {
  const row = table.insertRow();

  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);
