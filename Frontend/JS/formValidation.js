












function validateEmail(emailValue){
    let reqEmail = document.getElementById("reqEmail");
    let invalidEmail = document.getElementById("invalidEmail");
    if(!emailValue){
        reqEmail.stylr.display = "block";
        invalidEmail.style.display = "none";
        return false;
    }else if(
       !/^[a-xA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)
    ){
        invalidEmail.style.display="block";
        reqEmail.stylr.display = "none";
        return false;
    }
    invalidEmail.style.display="block";
    reqEmail.style.display = "none";
    return false;

}