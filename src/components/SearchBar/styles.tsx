import styled from "styled-components";
import { Button, shadowing } from "./../Common/styles";

export const SearchButton = Button.extend`background-color: #1976d2;`;

export const NavContainer = styled.nav`
    width: 100%;
    min-height: 3em;
    background-color: #2196F3;
    display: flex;
    justify-content: center;
    padding: 0.2em;
    position: absolute;
    top: 0;
    ${shadowing};
`;

export const Input = styled.input`
    height: 2.0em;
    width: 100%;
    padding-left: 1em;
    border-radius: 3px;
    border: none;
    margin: 0.5em;
    ${shadowing};
`;

export const Label = styled.label`
    width: 70%;
    height: 100%;
    text-align: center;
`;
