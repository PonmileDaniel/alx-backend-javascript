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
console.log(teacher3);
