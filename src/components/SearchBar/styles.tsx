import styled, { css } from "styled-components";

export const shadowing = css`
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const NavContainer = styled.nav`
    width: 100%;
    height: 3em;
    background-color: goldenrod;
    display: flex;
    justify-content: center;
    padding: 0.2em;
    position: absolute;
    top: 0;
    ${shadowing};
`;

export const Input = styled.input`
    height: 2.0em;
    width: 50em;
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
