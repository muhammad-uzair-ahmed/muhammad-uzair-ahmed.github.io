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