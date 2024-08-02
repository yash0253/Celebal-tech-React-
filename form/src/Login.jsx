import  React,{ useState } from 'react'
import  './Login.css'

function Login(){

    const [user, setUser]=useState("");
    const [password, setPassword]=useState("");
    const [passErr, setPassErr]=useState(false);
    const [userErr, setUserErr]=useState(false);




function loginHandel(e){


    if(user.length<3 || password.length<3){

        alert("type correct values")
    }else{
        alert("all good")
    }

    e.preventDefault()
}

function userHandeler(e){

    let item=e.target.value;
    if(item.length<3){
        setUserErr(true)
    }
    else{
        setUserErr(false)
    }
    setUser(item)

}
function passwordHandler(e){

    let item=e.target.value;
    if(item.length<3){
        setPassErr(true)
    }else{
        setPassErr(false)
    }
    setPassword(item)
}


    return(
        <div className='main'>
            <h1>User Register</h1>
            <form className='form' onSubmit={loginHandel}>
        
            <input type="text" placeholder="First Name" onChange={userHandeler}/> <br/>{userErr?<span>User Not Valid</span>:""}
            <input type="text" placeholder="Last Name" onChange={userHandeler}/> <br/>{userErr?<span>User Not Valid</span>:""}
            <br/><br/>
            <input type="email" placeholder="Email" onChange={userHandeler}/> <br/>{userErr?<span>User Not Valid</span>:""}
            <input type="phone" placeholder="Phone Number" onChange={userHandeler}/> <br/>
            <input type="text" placeholder="Enter User Password" onChange={passwordHandler} /><br/>
            <br/><br/>
            <button type="submit">Login</button>





            </form>
        </div>
    )
}

export default Login;