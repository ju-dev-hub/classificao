import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/style/theme/_tokens";
import { Link } from "react-router-dom";
import alma from "../../assets/img/alma.png";
import classificao from "../../assets/img/classificao.png";
import projetos from "../../assets/img/projeto.png";
import especial from "../../assets/img/especial.png";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 52px;

    @media (max-width: 1280px) {
        display: block;
        align-items: center;
    };

    .item{
        display: grid;
        align-items: center;
        text-align: center;
        color: ${theme.$dark};
        font-family: "Montserrat";
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        margin-bottom: 60px;

        @media (max-width: 1280px) {
            display: block;
            align-items: center;
            margin-bottom: 24px;
        };

        img{
            margin-bottom: 8px;
            width: 280px;
            height: 170px;
            border-radius: 8px
        }
    }
`;

const Highlights = () => {
    return (
        <Container>
            <Link to="/pets/especiais">
                <div className="item">
                    <img src={especial} alt="Adoção Especial"/>
                    <span>
                        Adoção especial
                    </span>
                </div>
            </Link>
            <Link to="/projetos/todos">
                <div className="item">
                    <img src={projetos} alt="Conheça os projetos"/>
                    <span>
                        Conheça os projetos
                    </span>
                </div>
            </Link>
            <Link to="/projetos/classificao">
                <div className="item">
                    <img src={classificao} alt="Sobre o Classificação"/>
                    <span>
                        Sobre o Classificação
                    </span>
                </div>
            </Link>
            <Link to="/projetos/alma">
                <div className="item">
                    <img src={alma} alt="Alma - Fotografia de Vidas"/>
                    <span>
                        Alma - Fotografia de Vidas
                    </span>
                </div>
            </Link>
        </Container>
    )
};

export default Highlights;