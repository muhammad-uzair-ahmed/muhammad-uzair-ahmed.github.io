//    find/search the fruit in arry method
// let arr = ["Mango","apple","banana"];
// let UserAsk = prompt('Enter the fruit name');

// let Isavalable = false;
// for (let i = 0; i < arr.length; i++) {
// 	if(UserAsk.toLowerCase() === arr[i].toLowerCase()){
// 		Isavalable = true;
// 		break;
// 	}
// }
// if(Isavalable){
// console.log("this fruit is available");}
// else{
// 	console.log("not avalable");
// }

// find string length


console.log("saylani".length);

// slice funtion
console.log("saylani".slice(0, 3));

// indexof
let NotAllowed = ["aby", "salay"];
let para = prompt("write anything");
for (let i = 0; i < NotAllowed.length; i++) {
	let index = para.indexOf(NotAllowed[i]) ;
	// console.log(result);
	let before=para.slice(0,index);
	let after =para.slice(index + NotAllowed[i].length ,para.length);
	let FindNotallowdWord=para.slice(NotAllowed.length,para.length)
	console.log(FindNotallowdWord);
	if (index !== -1 ) {
		console.log("this word is not allowed " + FindNotallowdWord);
		break;
	}
	else {
		console.log("all clear" + before + after);
		break;
	}
}

//math.replace 
let replace="lorem the para";
console.log(replace.replace("the","a"));

//math.floor
let floor = Math.floor(12+7/2);
console.log(floor);

// math. random
let random=Math.random() *20;

console.log(Math.floor(random));

//string to number convertion
let str = "itsok"
console.log(parseInt(str));