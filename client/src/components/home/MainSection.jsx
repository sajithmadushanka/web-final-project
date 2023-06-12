import mainImage from "../../assets/main.png"
import "../../styles/css/home/main.css"
function MainSection() {
    return ( 
        <>
            <div className="MainSection">
        <div className="leftSide">
            <div className="mainText">
                <h1>Discover Your </h1>
                <h1>Deam Fashion</h1>
                <p>Embrace Your Beauty and Showcase Your Style</p>
            </div>
            <div>
                <button className="shopnowBtn">Shop Now</button>
            </div>
        </div>
        <div className="mainImg">
            <img src={mainImage} alt="MainImgage" height="900px" />
        </div>
    </div>
        
        
        </>
     );
}

export default MainSection;