import React from "react";
import styled from "styled-components";
import PetCard from "../petCard";
import lupa from "../../assets/img/pesquisar.svg";
import divisor from "../../assets/img/divisor-rosa.svg";
import { theme } from "../../assets/style/theme/_tokens";

const Container = styled.div`
    display: block;
    margin: 0px 52px;

    @media (max-width: 1280px){
        margin: 16px 32px;
    }

    h3{
        font-family: "Montserrat";
        font-weight: 600;
        font-size: 48px;
        color: ${theme.$dark};
        letter-spacing: 2px;
        margin-bottom: 24px;
        margin-top: 16px;

        @media (max-width: 1280px){
            font-size: 40px;
            margin-top: 0px;
        };
    };

    p{
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 14px;
        color: ${theme["$primary-200"]};
        letter-spacing: 0.1px;
        margin-bottom: 16px;
        width: 608px;
        margin-bottom: 32px;

        @media (max-width: 1280px){
            width: 100%;
        };
    };

    input{
        font-family: "Montserrat";
        border: 1px solid ${theme["$gray"]};
        border-radius: 4px;
        width: 500px;
        height: 42px;
        color: ${theme["$primary-100"]};
        padding-left: 18px;
        margin: 32px 0 16px 0;

        @media (max-width: 1280px){
            width: 100%;
            padding-left: 0px;

            ::-webkit-input-placeholder {
                padding-left: 18px;
            };
        };
    };

    .lupa{
        position: relative;
        left: -40px;
        top: 5px;

        @media (max-width: 1280px){
            float: right;
            left: -12px;
            top: -48px;
        };
    };

    .card{
        .pet-card{
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;

            @media (max-width: 1280px){
                justify-content: flex-start;
        };
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
                    Existem, em m??dia, 10 mil animais em situa????o de abando em uma cidade de m??dio porte. Estes s??o acolhidos por ONGs ou pessoas respons??veis que doam seu tempo para salv??-los desta triste realidade. Conhe??a e apoie estes, fa??a sua contribui????o, fa??a sua A????O e ajuda a vida destes animais ser mais digna e feliz.
                </p>
            </div>
           <div>
           <img src={divisor} alt="Divis??o de itens"></img>
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
