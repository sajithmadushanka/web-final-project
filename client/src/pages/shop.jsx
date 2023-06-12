import React from 'react';
import Footer from "../components/reusabal/Footer";
import Navbar from "../components/reusabal/Navbar";
import ItemsRow from "../components/shop/Itemsrow";
import SearchBar_ from "../components/shop/Searchbar";
import Filters from "../components/shop/filters";

function ShopPage() {
  return (
    
       <>
          <Navbar />
          <SearchBar_ />
          <Filters />
          <ItemsRow />
          <Footer />
       </>
   
  );
}

export default ShopPage;
