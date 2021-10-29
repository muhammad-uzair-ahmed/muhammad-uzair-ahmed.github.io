
function myfunction(x) {
	let name =document.getElementById(x);
	console.log(name.value);
	
	let name2 =document.getElementById(x).value;
	name2="its ok!"
	console.log(name2);
	
	let Inner = document.getElementById(x);
	Inner.innerHTML = "<h1>its ok</h1>";
	console.log(Inner);

}

// swip images


function swappic() {

	document.getElementById("src").src = "../resume_project/img/349836797.webp";
	
}

///href link 
function facebook(x) {
	let fb =document.getElementById(x);
	console.log(fb);
	fb.href="http:///www.facebook.com";
	fb.innerText="facebook";
	console.log(fb);
	
	fb.style.fontSize='2em'
}

///tags selector

let tags = document.getElementsByTagName('h1');
for (let i = 0; i < tags.length; i++) {
// console.log(tags.length);
tags[i].innerText="okey";
	
console.log(tags[i]);	
}

let para=document.getElementById('para');
inner =para.innerHTML;
para.style.fontSize ='10px';
setInterval( function() {
	let currentsize = para.style.fontSize;
	currentsize = +currentsize.slice(0,2);
	currentsize++;
	if(currentsize > 30){
		currentsize = 10;
	}
	para.style.fontSize= currentsize + 1 + 'px';
	console.log(currentsize);
}, 1000);
// console.log(para.style.fontSize);

let arry=[1,3];
arry[10]=123;
console.log(arry);

