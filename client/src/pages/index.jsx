import Banner from "../components/home/Banner";
import MainSection from "../components/home/MainSection";
import SearchBar from "../components/home/Searchbar";
import SecondSection from "../components/home/SecondSection";
import ThirdSection from "../components/home/ThirdSection";
import Footer from "../components/reusabal/Footer";
import Navbar from "../components/reusabal/Navbar";

import "../styles/css/home/index.css"

function HomePage() {
    return ( 
    <>
            <Navbar></Navbar>

            <SearchBar></SearchBar>
            <MainSection></MainSection>
            <Banner></Banner>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            
            <Footer></Footer>

    
    </> );
}

export default HomePage;