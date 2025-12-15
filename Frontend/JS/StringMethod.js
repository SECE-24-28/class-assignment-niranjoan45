// length
let str1 = "Hello World";
console.log(str1.length); //OP: 11

// at() &  charAt()
console.log(str1.charAt(6)); //it cant do negative indexing
console.log(str1.at(6));     //it can do negative indexing

//slice 
console.log(str1.slice(2,4)); // OP :ll

//substring
console.log(str1.substring(2,4)); //OP: ll

//indexof
console.log(str1.indexOf("d"));

//lastindexof
console.log(str1.lastIndexOf("l"));

//includes
console.log(str1.includes("heyyy"));

//startsWith
console.log(str1.startsWith("he")); 

//endsWith
console.log(str1.endsWith("d"));

//replace
console.log(str1.replace("l","i")); // ot replaces only first occurance

//replaceAll
console.log(str1.replaceAll("l","i")); // it replace all occurance 

//concat
console.log(str1.concat("kgj")); 

let str2 = "        welcome      ";

//trim
console.log(str2.trim()); 

//trimStart
console.log(str2.trimStart());

//trimEnd
console.log(str2.trimEnd());

//repeat
console.log(str2.repeat(3));

//repeatAll
console.log(str2.split(""));

let str3 = "John";
console.log(str3.padStart(10,"wick"));
console.log(str3.padEnd(10,"wickwick"));
