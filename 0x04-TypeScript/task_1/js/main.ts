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

cont director1: Directors = {
	firstName: 'John',
	lastName: 'Samuel',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17
}
console.log(director1);
console.log(teacher3);
