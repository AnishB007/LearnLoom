import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [submitBtn, setSubmitBtn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);

    
  }


  // useEffect(()=>{
  //   console.log("here");
  //   // handleSubmit();
  // },[])

  return (
    <div className="auth-form-container ">
      
      <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit" >Log In</button>
        <Link to="/Register" className="custom-link my-3">Don't have an account? Register here.</Link>
      </form>
      
    </div>
  )
}