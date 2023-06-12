import "../../styles/css/reusabal/navbar.css";

import logo from "../../assets/logo.png";
import cartImage from "../../assets/icons/shopping-cart.png";

import * as React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Navbar() {


// logout method --------------------------------------------------------------------------------
const navigate = useNavigate();
async function LogOut(){
    const token_ = localStorage.getItem("Authorization");
    const uri = `http://127.0.0.1:5050/users/logout`;
  
  try {
    const res = await axios.post(
      uri,
      null,
      {
        headers: {
           'Authorization': `Bearer ${token_}`,
           'content-type': 'text/json'
        },
      }
    );
    console.log(res.status);
    localStorage.removeItem('Authorization');
    localStorage.removeItem('username');
    navigate('/');
   
  } catch (error) {
    console.log(error.message);
    // Display an error message to the user
    alert("There was an error adding your task. Please try again.");
  }
}


    

//-------------------------------------------------------------      
    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        if (localStorage.getItem('username')) {
            setLoggedIn(true);
        }
    }, []);

    return (
        <>
            <header>
                <div className="logo">
                    <a href="#"><img src={logo} alt="logo" width="400px" /></a>
                </div>
                <div className="menulinks">
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="#">About Us</a>
                    <a href="#">Help</a>
                </div>
                <div className="headerRight">
  <a href="/cart">
    <img src={cartImage} alt="shopping cart" width="67px" height="67" />
  </a>
                {loggedIn ? (
                <>
                    <Link to="/account">Welcome {localStorage.getItem('username')}</Link>
                    <span onClick={LogOut} style={{marginLeft:"10px", fontSize: '15px', cursor:'pointer'}}>Logout</span>
                </>
                ) : (
                <Link to="/login">Login</Link>
                )}

                </div>

            </header>
        </>
    );
}




export default Navbar;
