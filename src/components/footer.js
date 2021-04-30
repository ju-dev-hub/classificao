import React from "react";
import styled from "styled-components";
import instagram from "../assets/img/instagram.svg";
import facebook from "../assets/img/facebook.svg";
import { theme } from "../assets/style/theme/_tokens";

const Container = styled.footer`
    margin: 16px 52px;
    float: right;

    @media (max-width: 1280px) {
        margin: 16px 32px;
    };

    div{
        display: flex;
        align-items: center;
    }

    span{
        font-family: "Montserrat";
        font-size: 14px;
        color: ${theme.$dark};
        padding-right: 20px;
    }

    hr{
        width: 21px;
        height: 0px;
        border: solid 0.5px ${theme["$secondary-300"]};
        margin: 0px 8px;
    }
`;

const Footer = () => {

    return (
        <Container>
            <div>
                <span >Compartilhe:</span>
                <img alt="Instagram" src={instagram} width="25px" height="25px"/>
                <hr/>
                <img alt="Facebook" src={facebook} width="25px" height="25px"/>
            </div>
        </Container>
    );

};

export default Footer;