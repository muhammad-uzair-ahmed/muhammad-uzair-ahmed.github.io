var later= "uzair";
// alert(123);
 var num1=1223;
//  alert(num1);
var num=1;
num + 1;
console.log(num);
num++;
console.log(num);
++num;
console.log(num);
--num;
console.log(num);
num--;
console.log(num);

// Array explaination 

var demoArray= [1,2,3,4,5,6];
console.log(demoArray);
// Using the keyword, pop, you can remove the last element of an array.
demoArray.pop();
demoArray.pop();
demoArray.pop();
demoArray.pop(0.[1]);
console.log(demoArray);

// Using the keyword, push, you can add one or more elements to the end of an array.

demoArray.push("muhammad","uzair", "ahmed");
console.log(demoArray);

// Use the shift method to remove an element from the beginning of an array.

demoArray.shift();
console.log(demoArray);

//To add one or more elements to the beginning of an array, use the unshift method

demoArray.unshift("name" , "A","A");
console.log(demoArray);

// Use the splice method to insert one or more elements anywhere in an array,
// // Use the splice method to insert one or more elements anywhere in an array, while
// optionally removing one or more elements that come after it. Suppose you have an array with
// // the elements "dog", "cat", "fly", "bug", "ox". The following code adds "pig", "duck", and "emu"
// // after "cat" while removing "fly" and "bug".
// The first digit inside the parentheses is the index of the position where you want to start
// adding if you're adding and deleting if you're deleting. The second digit is the number of
// existing elements to remove, starting with the first element that comes after the element(s) that
// you're splicing in. The code above leaves you with an array consisting of "dog", "cat", "pig",
// "duck", "emu", and "ox".
console.log("// You could make additions without removing any elements. The following code adds");


// "pig", "duck", and "emu" without removing any elements.
// pets.splice(2, 0, "pig", "duck", "emu");



demoArray.splice(2,4,"wasseem", "ahmed","furqan");
console.log(demoArray);
console.log("// You can also remove elements without adding any. If you start with the elements");
//  "dog",
// "cat", "fly", "bug", and "ox", the following code removes two elements starting at index 3
// —"bug" and "ox". This leaves "dog", "cat", and "fly".

demoArray.splice(2,4);
console.log(demoArray);

// Use the slice method to copy one or more consecutive elements in any position and put
// them into a new array.

demoArray.push(1,2,3,4,5,6,7,8,9);
console.log(demoArray);
NewArray=demoArray.slice(1);

console.log(NewArray);