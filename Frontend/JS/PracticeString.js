//1 
let str1 = "hello world";
console.log(str1.replace("hello world","Hello World"));

//2

function words(sentence){
    let words = sentence.trim().split(" ");
    return words.length;
}
//another way :
// words = str1.split(" ").length; return words;

console.log(words("I love JavaScript"));

//3
let str3 = "my name is John";
console.log(str3.split(" ").join("-"));

//4
let str4 = "programming";





//5
let str5 = "John Doe Smith";
let p=str5.split(" ");
console.log(p[0][0]+p[1][0]+p[2][0]);

//6
let str6 = "The quick brown fox";
let q = str6.split(" ").reduce((a,b) => a.length >= b.length ? a:b);
console.log(q);

//7
let str7 = "programming";


