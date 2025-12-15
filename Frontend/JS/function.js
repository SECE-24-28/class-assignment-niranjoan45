// name function
function add (a,b){
    return a+b;
}

console.log(add(10,20));
console.log("-----------------");

//anonymus function 

var sub = function (a,b){
    return b-a;
}
console.log(add(10,20));
console.log("-----------------");

// IIFE functions - Immediate invoked func expression
(function(a,b){
    return a*b;
})(10,20);
console.log("-----------------");

// arrow function
var div = (a,b) =>{
  return b/a;
}
console.log("-----------------");

// callback function (Using a function as another function's parameter)

function main(add){
    var sum = 10+20;
    console.log("the sum is ", sum);
    add(sum);
}

function second(num){
    console.log("this is second function", num);
}

main(second);
//second();
// callback hell / pyramid of doom 



