var product = [
	    {
	        name: "juice",
	        price: "50",
	        quantity: "3",
	    },
	    {
	        name: "cookie",
	        price: "30",
	        quantity: "9",
	    },
	    {
	        name: "shirt",
	        price: "880",
	        quantity: "1",
	    },
	    {
	        name: "pen",
	        price: "100",
	        quantity: "2",
	    }
	]
	
	var total = (product[0].price * product[0].quantity);
	var total2 = (product[1].price * product[1].quantity);
	var total3 = (product[2].price * product[2].quantity);
	var total4 = (product[3].price * product[3].quantity);
	
	(function () {
		var old = console.log;
		var logger = document.getElementById('question1');
		console.log = function (message) {
		    if (typeof message == 'object') {
			logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
		    } else {
			logger.innerHTML += message + '<br />';
		    }
		}
	    })();
	// document.getElementById("").innerHTML=21 ;
	console.log(total);
	console.log(total2);
	console.log(total3);
	console.log(total4);


	// question 02

	
	(function () {
		var old = console.log;
		var logger = document.getElementById('question2');
		console.log = function (message) {
		    if (typeof message == 'object') {
			logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
		    } else {
			logger.innerHTML += message + '<br />';
		    }
		}
	    })();
var PersonDetails = {
    fristName: "muhammad uzair ",
    lastName:"ahmed",
    email: "ua78900@gmail.com",
    password: "uziar123",
    age: 21,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan",
}
	if("age" in PersonDetails && "country" in PersonDetails == true){
		if("fristName" in PersonDetails && "lastName" in PersonDetails == true){
	    console.log("all properties are exist in object ");
	} 
}
else{
	    console.log("Not found");

	}

// question no 3

(function () {
	var old = console.log;
	var logger = document.getElementById('question3');
	console.log = function (message) {
	    if (typeof message == 'object') {
		logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
	    } else {
		logger.innerHTML += message + '<br />';
	    }
	}
    })();

	function obj(first, last, middle, age, city){
		    this.firstName = first;
		    this.midleName = middle;
		    this.lastName = last;
		    this.age = age;
		    this.city = city;
		}
		const intro = new obj("Muhammad", "uzair","ahmed", 21, "karachi")
		// age= intro.age;
		console.log("first name : " + intro.firstName);
		console.log("middle name : " + intro.midleName);
		console.log("last name : " + intro.lastName);
		console.log("age of person: " + intro.age);
		console.log("city name : " + intro.city);
// question no 04


    function Area(name, gender, address, education, profession){
	this.name = name;
	this.gender = gender;
	this.address = address;
	this.education = education;
	this.profession = profession;
	
    }
    
    function myfun(){
	var personName = document.getElementById("name").value;
	var address = document.getElementById("address").value;
	var education = document.getElementById("education").value;
	var profession = document.getElementById("profession").value;
    
    
	const myArea = new Area(personName, 23, address, education, profession);
	console.log(myArea);
	(function () {
		var old = console.log;
		var logger = document.getElementById('question4');
		console.log = function (message) {
		    if (typeof message == 'object') {
			logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
		    } else {
			logger.innerHTML += message + '<br />';
		    }
		}
	    })();
}
