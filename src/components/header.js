import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.svg";
import loginho from "../assets/img/loginho.svg";
import { theme } from "../assets/style/theme/_tokens";
import { Link } from "react-router-dom";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 16px 52px;

    @media (max-width: 1280px) {
        margin: 16px 32px;
    };

    .itens{
        display: flex;
        align-items: center;
        font-weight: 600;
    };

    .loguinho{
        position: relative;
        right: 16px;
        top: -38px;
    }; 
    
    .itens-mobile{
        display: grid;
        align-items: center;
        width: 100%;
        font-weight: 600;

        .logo{
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            justify-content: space-between;
            
            .entrar{
                display: flex;
                align-items: center;
            };
        };

        .links{
            display: flex;
            justify-content: space-between;

            div{
                padding-right: 0px;
            };
        };
    };    
`;

const Item = styled.div`
    padding-right: 48px;

    @media (max-width: 1280px) {
        padding-right: 32px;
    };

    a{
        color: ${theme.$dark};
        font-family: 'Montserrat';

        &:hover{
            color: ${theme["$primary-100"]}
        } 
    };

    img{
        cursor: pointer;
    };
`;

const Button = styled.div`
    background-color: ${theme.$dark}; 
    border: none;
    border-radius: 8px;
    padding: 12px 2em;    
    cursor: pointer;
    color: ${theme.$light};
    letter-spacing: 1.25px; 
    font-size: 14px;
    font-family: 'Montserrat';    
`;

const Favorites = styled.span`
    padding: 0px 4px;
    color: ${theme["$secondary-300"]};
    border: solid ${theme["$secondary-300"]} 1.5px;
    border-radius: 50%;
    font-family: 'Montserrat-Bold';
    font-size: 11px;
    position: absolute;
    top: 36px;
    margin-left: -12px;
    cursor: pointer;
    background-color: ${theme["$secondary-100"]};
`;

const Header = () => {
    const screen = window && window.screen && window.screen.width ? window.screen.width : 1280;

    const [media] = useState(screen);  

    return (
        <>
        {
        media < 1280 ?
            <Container>
                <div className="itens-mobile">
                    <div className="logo">
                        <div>
                            <Link to="/">
                                <img alt="Logo do Classificão" src={logo} width={media < 1280 ? "55px" : "60px"} height="60px" />
                            </Link>
                        </div>
                        <div className="entrar">
                            <Item>
                                <img alt="Pets que eu amei!" src={loginho} width={media < 1280 ? "36px" : "42px"} height="31px" />
                                <Favorites>2</Favorites>
                            </Item>                
                            <Link to="/login">   
                                <Button>                 
                                    entrar
                                </Button>
                            </Link>    
                        </div> 
                    </div>
                    <div className="links">
                        <Item>
                            <Link to="/pets/caes">
                                cães
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/pets/gatos">
                                gatos
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/cadastro">
                                cadastre um pet
                            </Link>
                        </Item>
                    </div> 
                </div> 
            </Container>
        :
        <Container>
            <Link to="/">
                <img alt="Logo do Classificão" src={logo} width={media < 1280 ? "50px" : "60px"} height="60px" />
                <img alt="Pets que eu amei!" src={loginho} width="34px" height="23px" className="loguinho"/>
            </Link>
            <div className="itens">
                <Item>
                    <Link to="/pets/caes">
                        cães
                    </Link>
                </Item>

                <Item>
                    <Link to="/pets/gatos">
                        gatos
                    </Link>
                </Item>

                <Item>
                    <Link to="/cadastro">
                        cadastre um pet
                    </Link>
                </Item>
                
                <Item>
                    <img alt="Pets que eu amei!" src={loginho} width="42px" height="31px" />
                    <Favorites>2</Favorites>
                </Item>
            
                <Link to="/login">   
                    <Button>                 
                        entrar
                    </Button>
                </Link>
            </div>    
        </Container>                          
        }
    </>
    );
};

export default Header;
