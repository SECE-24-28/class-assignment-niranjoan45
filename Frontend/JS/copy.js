let person ={
    fname : "Harry",
    lName : "potter",
    age : "23",
    address :{
        city : "Bengaluru",
        pincode : 565656,
    },
};
//let personCopy = person; // normal copy (copy directly)
//let personCopy = {... person}; //shallow copy (changes done only in parent class not in copy)
let personCopy = JSON.parse(JSON.stringify(person)); // deep copy 
person.age = 34;
person.address = "Mumbai";

console.log("person", person);
console.log("personCopy", personCopy);

// rest operator

function add(a,b,...num){  // (...) this three dot is called rest controller . it is used because to include all parameter beyond the shown paramter
  return a+b;
}

console.log(add(10,30,50,70,90,23,34,56));