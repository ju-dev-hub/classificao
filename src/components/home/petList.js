import React from "react";
import styled from "styled-components";
import PetCard from "../petCard";
import lupa from "../../assets/img/pesquisar.svg";
import divisor from "../../assets/img/divisor-rosa.svg";
import { theme } from "../../assets/style/theme/_tokens";

const Container = styled.div`
    display: block;
    margin: 0px 52px;

    h3{
        font-family: "Montserrat";
        font-weight: 600;
        font-size: 48px;
        color: ${theme.$dark};
        letter-spacing: 2px;
        margin-bottom: 24px;
        margin-top: 16px; 
    }

    p{
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 14px;
        color: ${theme["$primary-200"]};
        letter-spacing: 0.1px;
        margin-bottom: 16px;
        width: 608px;
        margin-bottom: 32px
    };

    input{
        font-family: "Montserrat";
        border: 1px solid ${theme["$gray"]};
        border-radius: 4px;
        width: 500px;
        height: 42px;
        color: ${theme["$primary-100"]};
        padding-left: 18px;
        margin: 32px 0 16px 0
    };

    .lupa{
        position: relative;
        left: -40px;
        top: 5px
    };

    .card{
        .pet-card{
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }
    };
`;

const PetList = () => {

    return(
        <Container>
             <div>
                <h3>
                    Em busca de um lar
                </h3>
                <p>
                    Existem, em média, 10 mil animais em situação de abando em uma cidade de médio porte. Estes são acolhidos por ONGs ou pessoas responsáveis que doam seu tempo para salvá-los desta triste realidade. Conheça e apoie estes, faça sua contribuição, faça sua AÇÃO e ajuda a vida destes animais ser mais digna e feliz.
                </p>
            </div>
           <div>
           <img src={divisor} alt="Divisão de itens"></img>
           </div>
            <div>
                <input className="input" placeholder="encontre um pet..."></input>
                <img src={lupa} alt="Encontre um pet" className="lupa"></img>
            </div>
            <div className="card">
                <PetCard></PetCard>
            </div>
        </Container>
    );
};

export default PetList;
