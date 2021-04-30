import React from "react";
import styled from "styled-components";
import dog from "../assets/img/dog-01.png";
import dislike from "../assets/img/dislike.svg";
import instagram from "../assets/img/instagram-rosa.svg";
import { theme } from "../assets/style/theme/_tokens";

const Container = styled.div`
    margin: 18px 0;

    .image{
        width: 220px;
        height: 240px;
        border-radius: 8px;
        cursor: pointer;
    };

    .curtida{
        position: relative;        
        top: -10px;
        right: 45px;
        cursor: pointer;
    };

    .name{
        font-family: "Montserrat";
        font-weight: 600;
        font-size: 20px;
        color: ${theme.$dark};
        letter-spacing: 0.15px;
        margin-bottom: 8px;
        margin-top: 5px;       
    };

    .item{
        font-family: "Montserrat";
        font-size: 14px;
        color: ${theme.$dark};
        letter-spacing: 0.1px;
        align-items: center;
        display: flex;       
    };

    .instagram{
        position: relative;
        width: 20px;
        height: 20px;
        margin-left: 5px;
        cursor: pointer;
    }
`;

const PetCard = () => {

    const photos = [{
        id: 1,
        src: dog,
        name: "Laura",
        age: "3 meses",
        gender: "Fêmea",
        project: "Acervo 4Patas"
    }, {
        id: 2,
        src: dog,
        name: "Laura",
        age: "3 meses",
        gender: "Fêmea",
        project: "Acervo 4Patas"
    }, {
        id: 3,
        src: dog,
        name: "Laura",
        age: "3 meses",
        gender: "Fêmea",
        project: "Acervo 4Patas"
    }, {
        id: 4,
        src: dog,
        name: "Laura",
        age: "3 meses",
        gender: "Fêmea",
        project: "Acervo 4Patas"
    }, {
        id: 5,
        src: dog,
        name: "Laura",
        age: "3 meses",
        gender: "Fêmea",
        project: "Acervo 4Patas"
    }, {
        id: 6,
        src: dog,
        name: "Laura",
        age: "3 meses",
        gender: "Fêmea",
        project: "Acervo 4Patas"
    }];

    return(
        <div className="pet-card">
           { photos.map((i) => {
               return (
                <Container key={i.id} className="card">
                    <div>
                        <img src={i.src} alt="Cachorro 01" className="image"></img>
                        <img src={dislike} alt="Item desmarcado" className="curtida"></img>                        
                    </div>
                    <div>
                        <div className="name">
                            {i.name}
                        </div>
                        <div className="item">
                            {i.gender}, {i.age}
                        </div>
                        <div className="item">
                            {i.project}
                            <img src={instagram} alt="instagram" className="instagram"/>
                        </div>                        
                    </div>
                </Container>
               );
            })} 
        </div>
    );
};

export default PetCard;
