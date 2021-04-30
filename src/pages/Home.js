import React from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from '../components/header';
import HomeBanner from "../components/home/banner";
import Highlights from "../components/home/highlights";
import PetList from "../components/home/petList";

const Container = styled.div`
    @media (max-width: 1280px){
        display: flex;
        flex-direction: column-reverse;
    };
`;

const Home = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <HomeBanner></HomeBanner>
                <Container>
                    <Highlights></Highlights>
                    <PetList></PetList>
                </Container>               
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;