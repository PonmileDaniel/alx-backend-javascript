interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;  // Optional
	location: string;
	[key: string]: any;
}

const teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Ndukwe',
	fullTimeEmployee: false,
	location: 'London',
	contract: false
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName.charAt(0)}. ${lastName}`;
};

const director1: Directors = {
	firstName: 'John',
	lastName: 'Samuel',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17
}

interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Doe');
console.log(student.displayName());        // Output: John
console.log(student.workOnHomework());
console.log(printTeacher("John", "Doe"));
console.log(director1);
console.log(teacher3);
