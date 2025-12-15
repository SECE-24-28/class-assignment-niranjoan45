var arr = [10,20,30];


for (var i=0; i<arr.length;i++){
    console.log(arr[i]);
}

console.log("-------------------");
for (var a of arr){
    console.log(a);
}

console.log("-------------------");

for (var a in arr){
    console.log(a);
}

// object : 

var person ={
    fName : "Harry",
    lName : "Potter",
    age : "20"
};

for(var a in person){
    console.log(person[a]);
}