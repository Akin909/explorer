import styled from "styled-components";
import { Button, shadowing } from "./../Common/styles";

export const SearchButton = Button.extend`background-color: #1976d2;`;

export const NavContainer = styled.nav`
    width: 100%;
    background-color: #2196f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.2em;
    position: absolute;
    top: 0;
    ${shadowing};
`;

export const Input = styled.input`
    height: 2em;
    width: 100%;
    padding-left: 1em;
    border-radius: 0.03em;
    border: none;
    margin: 0.5em;
    ${shadowing};
`;

export const Label = styled.label`
    width: 70%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CategoryContainer = styled.section`
    width: 100%;
    height: 1.3em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Category = styled.article`
    width: 10em;
    height: 1.2em;
    background-color: black;
    color: white;
    text-align: center;
`;
