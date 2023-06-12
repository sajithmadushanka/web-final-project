
import Footer from "../components/reusabal/Footer";
import Navbar from "../components/reusabal/Navbar";
import "../styles/css/account/account.css";
import React, { useState, useRef , useEffect} from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function AccountPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    function handleImageChange(event) {
      setSelectedImage(event.target.files[0]);
    }

    const token_ = (localStorage.getItem("Authorization"));
    const fileInputRef = useRef(null);
    
       //---------------------load user image and name from DB --------------------------------
       const [error, setError] = useState("");
       const [image, setImage] = useState('');
       const [name_, setName] = useState('');
       const [email_, setEmail] = useState('');
       const fetchData = async () => {
          try {
            const result = await axios.get("http://127.0.0.1:5050/users/me", {
              headers: {
                Authorization: `Bearer ${token_}`,
                "Content-Type": "application/json",
              },
              params: null,
            });
            if(image !== result.data.image){
              setImage(result.data.image);
            }
           if(name_ !== result.data.name){
              setName(result.data.name);
              setEmail(result.data.email);
           }       
          } catch (error) {
            console.error(error);
          }
        };
        
        useEffect(() => {
           fetchData();
        }, [token_]);
  
  ///------------haddle the browse images---------------------     
   
  function submit_img(event){
    event.preventDefault();
    handleUpdatImag(selectedImage);
  }
  async function handleUpdatImag(image) {
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await axios.patch(
        `http://127.0.0.1:5050/users/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token_}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchData();
      console.log(response.status);
    } catch (error) {
          console.log(error);
          }
        }

          //---------------------------- delete user--------------------------------
async function deleteUser(){
    axios.delete(`http://127.0.0.1:5050/users/delete/me`,{
      headers: {
        Authorization: `Bearer ${token_}`,
        "Content-Type": "application/json",
      },
    }).then(response =>{
      console.log(response.status);
      navigator('/');

    }).catch(error => {
      console.log(error);
    });
}

    
    //save image to DB----------------------------------------------------

    // comfirm button for get input fiel data
  function confirmBtn(){
      const name =document.getElementById('name').value;
      if(name_ !== name){ // if user input diffetent than current value then only call the username update function
          handleUpdateName(name);
      }    
  }
  
  
  // if user update his name then that will update in database
    async function handleUpdateName(name) {
      try {
        const response = await axios.patch(
          `http://127.0.0.1:5050/users/update`,
          { name: name },
          {
            headers: {
              Authorization: `Bearer ${token_}`,
              "Content-Type": "application/json",
            },
          }
        );
        fetchData();
        console.log(response.status);
      } catch (error) {
            console.log(error);
            }
    }

    return ( 
    <>
            {/* nav bar */}
            <Navbar></Navbar>
 
            <h1>My Cart</h1>
            <div className="img_">
            <form action="">
            <input
          type="file"
          id="image"
          name="image"
          required
          onChange={handleImageChange}
          
        />
        <button onClick={submit_img} style={{margin:"10px"}}>Update Image</button>
            </form>
            </div>
            <div className="p-details">
                <h3>Personal Details</h3>
                <p>{name_}</p>
                <p>{email_}</p>
            </div>
            <div className="p-details">
                <h3>Delivery Address</h3>
                <div>
                    <p><span>address: </span> colombo 7</p>
                    <p><span>provence: </span> westen </p>
                    <p><span>city: </span> colombo </p>
                </div>
                <p><span>contact number: </span>0775226</p>
            </div>
            <div className="delete_update">
                <p><button onClick={deleteUser}>delete account</button></p>
               <div>
               <label>Name</label>
                <input type="text" id="name" placeholder="Enter your undate name" />
               </div>
                <p><button onClick={confirmBtn}>update Name</button></p>
            </div>
            <Footer></Footer>

     
     
    
    </> );
}

export default AccountPage;