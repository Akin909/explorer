import * as React from "react";
import { NavContainer, Input, SearchButton, Label } from "./styles";
import { Title } from "./../Common/styles";
import Select from "./../Select";

interface Props {
    value: string;
    handleChange: (val: string) => void;
    handleSelectChange: (val: string) => void;
}

const categories = ["wearables", "startups", "robotics"];
export default ({ value, handleChange, handleSelectChange }: Props) =>
    <NavContainer>
        <Title>The Healthy Nerd</Title>
        <Label>
            <Input onChange={e => handleChange(e.currentTarget.value)} value={value} />
            <SearchButton>Search</SearchButton>
            <Select categories={categories} handleChange={handleSelectChange} />
        </Label>
    </NavContainer>;
