
import Logo from "../components/register_login/logo.jsx";
import SocialLinks from "../components/register_login/social_links.jsx";

import styles from "../styles/css/register_login/reg_log.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import bcrypt from "bcryptjs";

function LoginPage(){
const navigate = useNavigate();
    const [error, setError] = useState('');

  function Login (){
    if(document.getElementById('email').value && document.getElementById('password').value){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value


        ///....................
        
    if(email && password){
        fetch('http://127.0.0.1:5050/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
      if(data.user.email === email ){
        
         const isMatchPw = bcrypt.compare(data.user.password, password);
         if(isMatchPw){
           // Save authorization token to localStorage
           localStorage.setItem('Authorization',data.token);
           localStorage.setItem('username',data.user.name);
              console.log(data.user.name);
              navigate('/');
         
         }
      }
    })
    .catch(error => {
      setError("Invaild Input!")
    });
      }else{
        alert("please enter username and password!")
      }
    }
    
  
  //-----------------------------------------------
      event.preventDefault();  
  }
    
    return (
        <>
               <div className={styles.surrounded}>
            
                <div className={styles.body}>

                    <div className={styles.RMain}>
                       {/* logo */}
                       <Logo></Logo>

                        <div className={styles.form}>
                            <form action="" method="post" style={{marginTop: '40px'}}>

                                <input type="email" placeholder="Email" name="email" id="email"/> <br />
                                <input type="password" placeholder="Password" name="password" id="password"/> <br />

                                <p>I don't have an account ? <span><a href="/register">Register</a></span></p>
                                <button  onClick={Login}>Login</button>

                            </form>
                        </div>

                        {/* //social link */}
                        <SocialLinks></SocialLinks>
                    </div>

                </div>
       
               </div>
        </>
    );
    }
export default LoginPage;