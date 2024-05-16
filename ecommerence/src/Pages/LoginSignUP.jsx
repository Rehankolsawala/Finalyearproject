import React from "react";
import './CSS/LoginSignUp.css'
import { useState } from "react";

const LoginSignUp = () => {

    const [state, setState] = useState("Login");
    const [formData, setformData] = useState({
        username: "",
        password: "",
        email: ""
    })

    const ChangeHandler = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }

    const login = async () => {
        console.log("login function executed", formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-Data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((data) => responseData = data)
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }

    const signup = async () => {
        console.log("SignUp function executed", formData);
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/form-Data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((data) => responseData = data)
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.error)
        }
    }

    return (
        <div className="Loginsignup" >
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignUp-fields">
                    {state === "Sign Up" ? <input name="username" value={formData.username} onChange={ChangeHandler} type="text" placeholder="your Name" /> : <></>}
                    <input name="email" value={formData.email} onChange={ChangeHandler} type="text" placeholder="Email Address" />
                    <input name="password" value={formData.password} onChange={ChangeHandler} type="Password" placeholder="Password" />
                </div>
                <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
                {state === "Sign Up" ? <p className="loginsignUp-login">Already have an account? <span onClick={() => { setState("Login") }}>Login Here</span></p>
                    : <p className="loginsignUp-login">Creat an account?<span onClick={() => { setState("Sign Up") }} >Click here</span></p>}



                <div className="loginsignup-agree">
                    <input type="checkedbox" name='' id='' />
                    <p>By contining,i agree to the trem of use & priacy poilcy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignUp
