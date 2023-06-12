
import Logo from "../components/register_login/logo";
import SocialLinks from "../components/register_login/social_links";
import styles from"../styles/css/register_login/reg_log.module.css";
import React from 'react';

import { useNavigate } from "react-router-dom";
import axios from 'axios';

function RegisterPage() {

   async function postUser (name, email,password) {
      
    const uri = `http://127.0.0.1:5050/users/${name}/${email}/${password}`;
    try {
      const res = await axios.post(uri);
      console.log(res.status);
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log("Error status code:", error.response.status);
      }
    }

  }
  //---------- after resiter has been succeessful navigate to login page ---------------------
  const navigate = useNavigate();
// check whather user input have or not in inputs fields
  function Submit(event) {
    event.preventDefault();
    if (
      document.getElementById('name').value &&
      document.getElementById('email').value &&
      document.getElementById('password').value &&
      document.getElementById('confrim-password').value
    )
    {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirm_password = document.getElementById('confrim-password').value;
    
      if(password == confirm_password){
        postUser(name, email, password);
      }else{
        alert('confirm password was not match!')
      }
      

       navigate('/login'); // navigate to login page
    } 
    else {
      alert('fields cannot be empty!')

    }
  }


    return (
    <>
    <div className={styles.surrounded}>
    
    <div className={styles.body}>
        <div className={styles.RMain}>
            {/* Logo import */}
            <Logo></Logo>
        <div className={styles.form}>
            <form action="" method="post">
            
                    <input type="text" placeholder="Name" name="name" id="name"/> <br />
                    <input type="email" placeholder="Email" name="email" id="email"/> <br /> 
                    <input type="password" placeholder="Password" name="password" id="password"/> <br />
                    <input type="password" placeholder="Confirm Password" name="confirm-password" id="confrim-password"/> <br />
                    <p>I have an account ? <span><a href="">Login</a></span></p>
                    <button type="submit" onClick={Submit}>Register</button>
            
            </form>
        </div>
        
           {/* social links */}
           <SocialLinks></SocialLinks>
    </div>

    </div>
</div>
    </>

    );
}

export default RegisterPage;