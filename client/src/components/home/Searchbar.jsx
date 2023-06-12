import seachIcon from "../../assets/icons/search.png"
import "../../styles/css/home/search.css";
function SearchBar() {
    return ( 

        <>
        <div className="searchbar">
            <form action="" method="get">
                <input type="text" name="search" id="" placeholder="Search..." />
                <button type="submit" name="submitbtn" className="search-icon">
                    <img src={seachIcon} alt="searchimage" width="32px" height="32px" />
                </button>
            </form>
        </div>
        
        </>
     );
}

export default SearchBar;