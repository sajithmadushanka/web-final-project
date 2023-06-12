import "../../styles/css/shop/filters.css";
function Filters() {
    return ( <>
         <div className="filter">
            sort by:
            <button className="filter-butn">Price</button>
            <button className="filter-butn">New arrived</button>
            <button className="filter-butn">Men's</button>
            <button className="filter-butn">Women's</button>
            <button className="filter-butn">Kid's</button>
           </div>
    
    </> );
}

export default Filters;