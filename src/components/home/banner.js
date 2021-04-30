import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/style/theme/_tokens";
import { Link } from "react-router-dom";
import osso from "../../assets/img/osso.svg";
import dog from "../../assets/img/dog-button.svg";
import cat from "../../assets/img/cat-button.svg";
import banner from "../../assets/img/home-banner.png";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 52px 52px 72px 52px;
    font-family: "Montserrat";

    @media (max-width: 1280px) {
        margin: 32px 32px 72px 32px;
    };

    h1{
        color: ${theme.$dark};
        font-size: 64px;
        line-height: 80px;
        letter-spacing: 3.5px;
        text-transform: uppercase;
        margin-bottom: 16px;

        @media (max-width: 1280px) {
            margin: 28px 0 0 0;
            font-size: 48px;
            line-height: 64px;
            font-weight: bold;
            letter-spacing: 2.5px;
        };

        span{
            color: ${theme["$primary-200"]};
            padding-right: 8px;
        };

        img{
            animation: rotation 0.5s alternate infinite;;
        };

        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(90deg);
            }
        };
    };
    
    h2{
        color: ${theme["$primary-200"]};
        font-size: 14px;
        letter-spacing: 0.1px;
        font-weight: 600;
        margin-bottom: 48px;
    };

    .banner{
        display: flex;
        justify-content: flex-end;

        @media (max-width: 768px) {
            display: none;
        };
    };

    .buttons{
        @media (max-width: 1280px) {
            display: flex;
            justify-content: space-between
        };
    }
`;

const Button = styled.button`
    background-color: ${props => props.cat ? theme["$secondary-100"] : theme.$dark};
    border: none;
    border-radius: 8px;
    width: 155px;
    height: 96px;
    color: ${props => props.cat ? theme.$dark : theme["$secondary-100"]};
    text-transform: uppercase;
    margin-left: ${props => props.cat ? "16px" : "0px"};
    cursor: pointer;

    @media (max-width: 400px) {
        width: 140px;
    };

    div{
        position: relative;
        top: 8px;
        font-family: "Rubik";
        letter-spacing: 1.5px;
        font-size: 16px;
        font-weight: 600
    }
`;

const HomeBanner = () => {
    return (
        <Container>
            <div>
                <div>
                    <h1>
                        não compre<br/><span>adote</span>
                        <img src={osso} alt="Ilustração de um osso"/>
                    </h1>                    
                </div>
                <div>
                    <h2>
                        Adotar é um ato de amor. Ajude a salvar.
                    </h2>
                </div>
                <div className="buttons">
                    <Link to="/pets/caes">
                        <Button>
                            <img src={dog} alt="Ilustração de um cão"/>
                            <div>
                                cães
                            </div>
                        </Button>
                    </Link>
                    <Link to="/pets/gatos">
                        <Button cat>
                            <img src={cat} alt="Ilustração de um gato"/>
                            <div>
                                gatos                            
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="banner">
                <img src={banner} alt="Imagem de cães e gatos" width="95%"/>
            </div>
        </Container>
    );
};

export default HomeBanner;