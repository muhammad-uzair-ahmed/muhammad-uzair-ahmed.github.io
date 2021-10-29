// old function used
function hello() {
	console.log("hello");
}
hello();
// old function used
let old = function () {
	console.log("hello");

}
old();
let wel = function (name) {
	console.log("welcomw", name);

}
wel("wellcome to progreess");

// advance es6 function used arrow 
let addvance = () => console.log("addvance function using arrow");
addvance();

let retn = (name,age) => `hello and wellcome ${name} ${age}`;

console.log(retn('muhamad uzair ahmed',23));

console.log(typeof retn);

const marterial=['karachi','lahore','islamabad','hyderabad'];
console.log(marterial.map(marterial => marterial));
console.log(marterial.map(marterial => marterial.length));




