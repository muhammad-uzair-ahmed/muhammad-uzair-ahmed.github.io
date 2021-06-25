const 	fs = require("fs");
const text = fs.readFileSync("./tut1.js", "utf-8");
console.log("the contant of file is ok");
console.log(text);
