// Scoping
// Block-Scoped Variables
// Block-scoped variables (and constants) without hoisting.
{

	var a = 10;
	console.log(a);
	let b = 10;
	console.log(b);
	function uzair() {
		let a = 30;
		if (a = 30) {
			let a = 40;
			if (a = 40) {
				let a = 50;


			}
			console.log(a);
		}
		console.log(a);


	}
	console.log(uzair());


}
// Scoping
// Block-Scoped Functions
// Block-scoped function definitions.
{
	function foo() { return 1 }
	foo() === 1
	{
		function foo() { return 2 }
		foo() === 2
		console.log(foo() === 1);
		console.log(foo() === 2);
	}
	console.log(foo() === 2);
	console.log(foo() === 1);
}

// currying function



function abc() {
	return function xyz() {
		// return ' word';
		return function etc() {

			return 'hello word';
		}
	}
}
console.log(abc()());
abc()();

//		Immediately Invoked Function Expressions (IIFE)
{

	let abc = 'Immediately Invoked Function Expressions (IIFE)';
	console.log(abc);
}

//hosting
{

	let a = 1; //decelaration

	let b;	//initailiation
	b = 2; //assignment

	xyz();
	function xyz() {
		console.log("function load after the call");
	}
}

//arrow function
{
	const even = [2, 4, 6, 8, 10];
	const odd = even.map(function (value) {
		return value - 1;

	});
	console.log(even, odd);
}
{

	const even = [2, 4, 6, 8, 10];
	const odd = even.map(value => value - 1);
	console.log(even, odd);
}
///arrow function experession
{
	const sum = (a, b) => a + b;

	console.log(sum(10, 20));
}
{
	const even = [0, 2, 4, 6, 8, 10]

	const odd = even.map(v => v + 1)
	console.log(odd);
}

// RETURN OBJECT object ko round braket main use krna
{
	const even = [2, 4, 6, 8, 10]
	const pair = even.map(v => ({ even: v, odd: v + 1, }))
	console.log(pair);
}
{
	const even = [0, 2, 4, 6, 8, 10]
	console.log(even, even.map((v, i) => v + 1));

}

//default parameter value

function f(x, y = 10, z = 20) {
	return x - y + z;
}


console.log(f(10) === 40);


// Arrow Functions
// Statement Bodies
// More expressive closure syntax.
{
	const fives = [];
	const num = [5, 10, 15, 20];
	nums = num.forEach(v => {
		if (v % 5 === 0)
			fives.push(v);

	});
	console.log(fives);


}


// Arrow Functions
// Lexical this
// More intuitive handling of current object context.
{
	let nums =[];
	let fives=[];	
	this.nums.forEach((v) => {
		if (v % 5 === 0)
		    this.fives.push(v)
	    })
}

