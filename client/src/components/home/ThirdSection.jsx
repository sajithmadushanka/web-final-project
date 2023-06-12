
import image1 from "../../assets/home_page_img/handsome.jpg"
import image2 from "../../assets/home_page_img/pink-dress.jpg"
import image3 from "../../assets/home_page_img/children.jpg"
import image4 from "../../assets/home_page_img/sneakers.jpg"

import "../../styles/css/home/third.css";

function ThirdSection() {
    return ( <>
     <div className="thirdSection">
        <h3>Pick by Category</h3>
        <div className="Category">
            <div className="gridItem"> 
                <div className="itemText"><a href="#">Men</a></div> 
                <img src={image1} alt="product img" /></div>
            <div className="gridItem">
                <div className="itemText"><a href="#">Women</a></div> 
                <img src={image2} alt="product img" /></div>
            <div className="gridItem">
                <div className="itemText"><a href="#">Children</a></div>
                <img src={image3} alt="product img" /></div>
            <div className="gridItem">
                <div className="itemText"><a href="#">Shoes</a></div> 
                <img src={image4} alt="product img" /></div>
        </div>
   </div>

    
    
    </> );
}

export default ThirdSection;