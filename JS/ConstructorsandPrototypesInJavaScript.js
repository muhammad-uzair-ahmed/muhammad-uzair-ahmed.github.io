//constructores


function Plan(name , price , space ,tansfer ,pages){
	this.name= name;
	this.price= price;
	this.space = space;
	this.tansfer = tansfer;
	this.pages = pages;

}

let plan1= new Plan('basic',3000,32.33,100,106 );
let plan2= new Plan('basic2',3000,32.33,200,180 );
let plan3= new Plan('basic3',3000,32.33,300,190 );
let plan4= new Plan('basic4',3000,32.33,400,190 );
let plan5= new Plan('basic5',3000,32.33,500,100 );

console.log(plan1,plan2,plan3,plan4,plan5);

function User(Name ,age ,email,gender){
	this.Name=Name;
	this.age = age;
	this.email=email;
	this.gender= gender;
	

}
User.prototype.like = function(userobj){
		if(userobj.gender === 'female' && userobj.gender === 'male'){
			console.log('tharki');

		}else{
			
			console.log(this.Name + " liked a picture" + userobj.Name);	
		}

	}

let uzair = new User('muhammad uzair ahmed', 21 , 'ua7800@gmail.com','male' );
let waseem = new User('muhammad waseem ahmed', 21 , 'ua7800@gmail.com','male' );
let mehwish = new User('mehwish' ,22,'mehwish@gmail.com','female')
console.log(uzair);

uzair.like(mehwish);
mehwish.like(uzair);

console.log(waseem.Name);
console.log(uzair.like(waseem));

// in operator
console.log('gender' in uzair);

// !!operator
console.log(!!uzair.age);

//hasownporperty
console.log(uzair.hasOwnProperty('its ok'));
console.log(uzair.hasOwnProperty('age'));

let obje ={
	name:'uzair ahmed',
	age:22,
}
for(let key in obje){
	console.log(key,obje[key]);
}

