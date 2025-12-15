// var , let and const
var a =10;
var b=a;
a=20;

console.log("a",a);
console.log("b",b);


// let
let c =10;
c=20
//let c = 30;  no redeclaration allows
 console .log("c",c);

// const
const d =10;
//d=20;
//const d = 30; 
console.log("d",d);


let person ={
    fname : "Harry",
    lName : "potter",
    age : "23",
    address :{
        city : "Bengaluru",
        pincode : 565656,
    },
};
const { fname ,lName , age , address} = person;
const{city, pincode} = person.address;

console.log(fname);
console.log(city);


