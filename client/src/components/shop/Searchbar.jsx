
import "../../styles/css/home/search.css"
import searchIcon from "../../assets/icons/search.png";
function SearchBar_() {
    return ( <>
             <div className="searchbar" style={{justifyContent:'center'}}>
                <form action="" method="get">
                    <input type="text" name="search" id="" placeholder="Search..." />
                    <button type="submit" name="submitbtn" className="search-icon">
                        <img src= {searchIcon} alt="search icon" width="32px" height="32px" />
                    </button>
                </form>
            </div>

    </> );
}

export default SearchBar_;