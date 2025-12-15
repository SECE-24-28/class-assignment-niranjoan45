//pending, fullfilled, rejected

let promise = new Promise((resolve, reject) => {
    if(5>10){
        resolve("Resolved");
    }else{
        resolve("Rejected");
    }
});

promise
.then((resolve)=>console.log(resolve))
.catch((rejected)=>console.log(reject));


fetch("https://jsonplaceholder.typicode.com/users")
 .then((response)=>{
    console.log(response);
    let data = response.json;
    return data;
 })
 .then((data)=>{
    console.log(data);
 })
 .catch((error)=>console.log(error));


 
//ESB async & await
const fetchUsers = ()=>{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
    } catch (error) {
        
    }
}