import "../../styles/css/reusabal/footer.css";
import tiktokImage from "../../assets/icons/tiktok.png"
import fbImage from "../../assets/icons/facebook.png"
import youtubeImage from "../../assets/icons/youtube.png"
import plyaImage from "../../assets/icons/google-play.png"
import appImage from "../../assets/icons/app-store.png"


function Footer() {
    return ( <>
     <footer>
       <div className="footerMain">
        <div>
            <h4>Connect with us</h4>

            <div>
               <a href="#"> <img src={tiktokImage} alt="tiktok"/></a>
                <a href="#"><img src={fbImage}alt="facebook"/></a>
               <a href="#"> <img src={youtubeImage} alt="youtube"/></a>
            </div>
        </div>
        <div>
            <h4>Quick Links</h4>
                <div className="quick_links">
                    <a href="/">Home</a>
                    <a href="#">FAQ</a>
                    <a href="/account">Account</a>
                </div>
        </div>
        <div>
            <div className="search2">
               <form action="" method="get">
                <input type="text" name="subcription" id="" placeholder="Enter your email"/>
                <button className="subBtn" type="submit">Sub</button>
            </form>
               
            </div>
            <div className="appdownloadlink">
                <a href="#"><img src={plyaImage} alt="play store"/></a>
               <a href="#"> <img src={appImage} alt="app store"/></a>
            </div>
        </div>
        
        
       </div>
        <div>
            <p>Copyright © 2023 Fashionhut Inc. All Rights Reserved.</p>
        </div>
   </footer>
    
    
    
    </> );
}

export default Footer;