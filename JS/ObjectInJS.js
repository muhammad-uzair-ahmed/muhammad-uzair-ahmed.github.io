

let students = {
	name: 'uzair',
	ID: 123,
	batch: 7
}
console.log(students);
console.log(students.name);
students.name = "uzair ahmed";

console.log(students.name);
// delete students.name;

// students.name = undefined;
console.log(students.name);

let studentss = [{
	name: 'uzair',
	ID: 123,
	batch: 7
}, {
	name: 'ahmed',
	ID: 123123,
	batch: 77
}
];

let teacher = [{
	name: 'nadir'
}];
let courses = [{
	name: 'web and app',
	duration: '1.5 year',
	days: 'weeked',
	timing: '2 to 5',
	student: studentss,
}];

// anomyous function object

let emplyee = {

	name: 'nadir',
	startTime: 09,
	endTime: 18,
	isAvalable: function () {
		let hour = new Date().getHours();
		if (hour > this.startTime && hour < this.endTime) {
			return true;


		}
		return false;
	}
};

console.log(emplyee.isAvalable());
console.log(emplyee.name);