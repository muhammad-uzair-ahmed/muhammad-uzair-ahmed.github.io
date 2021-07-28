const 	fs = require("fs");
const text = fs.readFileSync("delect.txt", "utf-8");
console.log("the contant of file is ok");
console.log(text);

NewText = text.replace("content", "success");
console.log(NewText);

console.log("create new file");
fs.writeFileSync("test.txt", NewText);


