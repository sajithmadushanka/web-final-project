import image1  from "../../assets/home_page_img/01.jpg";
import image2  from "../../assets/home_page_img/02.jpg";
import image3  from "../../assets/home_page_img/03.jpg";

import "../../styles/css/home/second.css";
function SecondSection() {
    return ( <>
            <div className="secondSection">
        <h3>Trending Products</h3>
         <div className="product_card_line">
            <div className="product_card">
                <img src={image1} alt="product img" />
                <p>Rs:1997.00</p>
                <p><a href="#">New trending T-shirt</a></p>
            </div>
            <div className="product_card">
                <img src={image2} alt="product img" />
                <p>Rs:1997.00</p>
                <p><a href="#">New trending T-shirt</a></p>
            </div>
            <div className="product_card">
                <img src={image3} alt="product img" />
                <p>Rs:1997.00</p>
                <p><a href="#">New trending T-shirt</a></p>
            </div>
        </div>
    </div>
    
    
    </> );
}

export default SecondSection;