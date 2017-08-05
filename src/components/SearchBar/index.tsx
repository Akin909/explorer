import * as React from "react";
import { NavContainer, Input, Label } from "./styles";

interface Props {
    value: string;
    handleChange: (val: string) => void;
}

export default ({ value, handleChange }: Props) =>
    <NavContainer>
        <Label>
            Search:
            <Input onChange={e => handleChange(e.currentTarget.value)} value={value} />
        </Label>
    </NavContainer>;
