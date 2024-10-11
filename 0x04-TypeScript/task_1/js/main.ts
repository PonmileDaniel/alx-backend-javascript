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

console.log(printTeacher("John", "Doe"));
console.log(director1);
console.log(teacher3);
