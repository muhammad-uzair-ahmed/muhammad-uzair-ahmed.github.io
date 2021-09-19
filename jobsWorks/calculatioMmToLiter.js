function conversionVolume() {

for (let dip=0; dip<=10; dip++){
	let ConstantValue=10;
	console.log(dip);
	let volume1= Number(document.getElementById("upervolume").value);
	let volume2= Number(document.getElementById("downvolume").value);
	
	Conversion=((volume1-volume2)/ConstantValue)*dip;
	let result =Math.abs(Conversion);
	let finalResult = result + volume1;
	console.log("the volume of last decimal Number = " + finalResult);
}
}
// let check = prompt("enter your city name ");
// let city= ["uzair","ahmed","waseem"];

// if(check == city){
// 	console.log("your city is here");

// }
// else{
// 	console.log("its not your city");
// }

// console.log(city);
// city= city.toUpperCase;
// console.log(city);

// let par="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse iure commodi, dignissimos, ea recusandae placeat, perspiciatis repellendus laborum quisquam autem mollitia ex numquam! Dolor, libero ex sit vel aperiam eum.";
// let result = par.indexOf("sit");
// let result2 = par.lastIndexOf("sit");
// console.log(result2);
// console.log(result);

// document.getElementById("dip").innerHTML = name;
// for (let dip=0; dip<=10; dip++){
// 	let num2=10;
// 	console.log(dip);
// 	let volume=276;
// 	let volum2=342;
// 	result=((volum2-volume)/num2)*dip;
// 	let ok =Math.abs(result);

// 	console.log(ok + volume);
// 	// console.log(volume);
// }
// function conversionVolume() {
// 	for (let dip = 0; dip <= 10; dip++) {

// 		let volume1 = document.getElementById("volume1").value;
// 		let volume2 = document.getElementById("volume2").value;
// 		let num = 10;
// 		conversion = ((volume1 - volume2) / num) * dip;
// 		console.log(conversion);
// 		let result = Math.abs(conversion);
// 		console.log(dip);
// 		console.log(result + volume1);

// 	}
// }
