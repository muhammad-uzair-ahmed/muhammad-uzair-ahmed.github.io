import React from 'react';
import ReactDOM from 'react-dom';
function Hi() {

return <div>Hello World!</div>;
}
ReactDOM.render(<Hi/>, document.querySelector('#hello'));


let hi=document.getElementById('hello').innerText;

console.log(hi);
document.write(hi);