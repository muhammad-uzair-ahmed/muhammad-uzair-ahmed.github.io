// date
let date = new Date();
console.log(date);

/// getday

let daysname=["sunday","monday","tuesday","wednesday","thuesday","friday","saturday"];
console.log(daysname[date.getDay()]);
console.log(date.getDate());
//get month
let getmonth = date.getMonth();
console.log(getmonth +1 );

//get year
console.log(date.getFullYear());

//get hours
console.log(date.getHours());

//get minutes

console.log(date.getMinutes());

//get second

console.log(date.getSeconds());

//get miniseconed
console.log(date.getUTCMilliseconds());

//get time

console.log(date.getTime());

// domsday qayamat ka din
let today= new Date();
let doomday = new Date("June 30,2045");
console.log(today);
let mstoday = today.getTime();
console.log(mstoday);
let msdoomday = doomday.getTime();
console.log(msdoomday);

doomday = msdoomday - mstoday;
console.log(doomday);

console.log(((((doomday/1000) /60)/60)/24)/365.25 );
console.log(Math.floor(doomday / (1000 * 60 * 60 * 24 * 365.25)));



// assignment  3 prompt  1st prmt dob 2nd month 3th prmt year enter 
// find krna apki pedish say le apne kite din guzara  
let date2 = new Date();
date2.setFullYear(2020);
date2.setMinutes(12)
date2.setMonth(1);
// date2.setTime("feb ,1 ,2020");
date2.setSeconds(33);

console.log(date2);