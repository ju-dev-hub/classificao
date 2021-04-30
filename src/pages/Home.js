import React from "react";
import Footer from "../components/footer";
import Header from '../components/header';
import HomeBanner from "../components/home/banner";
import Highlights from "../components/home/highlights";
import PetList from "../components/home/petList";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <HomeBanner></HomeBanner>
                <Highlights></Highlights>
                <PetList></PetList>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;