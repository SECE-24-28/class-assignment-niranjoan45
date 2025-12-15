import React from 'react';

function LoginPage(){
    const [formData , setformData] = useState({
        email : "",
        password : "",
    });
    const handleChange = (event) =>{
        setformData({
            [event.target.name] : event.target.value,
        });
    };
    console.log(formData);
    return(
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <lable htmlFor = ""> Email : </lable>
                    <input type="text" name="email" value={formData.email}/>
                </div>
                <div>
                <lable htmlFor = ""> Password : </lable>    
                <input type ="text" name= "password" value={formData.password}/>
                </div> 
                <button>submit</button>
            </form>
        </div>
    );
}