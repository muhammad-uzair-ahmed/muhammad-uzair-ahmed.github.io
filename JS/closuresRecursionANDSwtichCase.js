//closures


function xyz(x) {

	return function(y) {
		return x + y;

		
	}
	
}
let called=xyz(4);

console.log(called(2));


//Recursions

function abc(current, end) {
console.log(current);
	if(current>=end){
return "done";
}
	return abc(++current, end);
}

console.log( abc(1,5));
// factorial

function factorial(num) {
	if (num === 1 )
	{
		return 1;

	}
	return num * factorial(--num)
}

console.log(factorial(5));