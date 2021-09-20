
// document.addEventListener('mouseover',function () {
	
// 		 let text=document.getElementById('primary');
		 
// 		 text.innerHTML ="pop";
// 		 text.style.fontSize='2rem';
// 		 text.style.fontFamily='arial';
// 		 text.className='hidden';
// 		 message.style.display = 'block';
   

// 		})



// let popped = 0;

// document.addEventListener('mouseover', function(e){
    
//     if (e.target.className === "balloon"){
        
//                 e.target.style.backgroundColor = "#ededed";
//                 e.target.textContent = "POP!";
//                 popped++;
//                 removeEvent(e);
//                 checkAllPopped();
//     }   
// });

// function removeEvent(e){
//     e.target.removeEventListener('mouseover', function(){
        
//     })
// };

// function checkAllPopped(){
//     if (popped === 24){
//         console.log('all popped!');
//         let gallery = document.querySelector('#balloon-gallery');
//         let message = document.querySelector('#yay-no-balloons');
//         gallery.innerHTML = '';
//         message.style.display = 'block';
//     }
// };

function pop(){
	let text =document.getElementById('primary');
	if(text.className === 'ballon'){

		// let arr=[text];
		console.log(text);
		// console.log(text);
		text.innerHTML ="pop";
		text.style.fontSize='2rem';
		text.style.fontFamily='arial';
		// let message = document.querySelector('primary');
		// message.style.display = 'block';
		text.className='hidden';
		
		
		}else{
			console.log(text);
		}

		
}