//getELementById
//getELementByClassname
//getELementByTagname
//querySelector
//querySelectorAll

// 1] ById 

let head = document.getElementById("head");
head.innerText = "Welcome Back";
//head.innerHTML = "<h1>Hello</h1>";
head.style.color ="red";

// 2]ByClassname
let fruits = document.getElementsByClassName("fruits");
console.log(fruits);
fruits[0].style.color = "yellow";
fruits[3].style.color = "red";


let ele = document.querySelector("div");
let ele1 = document.querySelectorAll("div");

let h2Ele= document.createElement("h2");
console.log(h2Ele);
h2Ele.innerText = "This is a new Element"; //it will print inside the console as we crreate a element 
document.body.append(h2ELe); // used to add the text to the body
// document.getElementById("new").appendChild(h2Ele); //another way to add text to the body


//hide

function hideText(){
    head.style.display = "none";
}

function showText(){
    head.style.display = "Block"
}

function toggleText(){
    if(head.style.display=="none"){
           showText();
   }else{
           hideText();        
   }
}
