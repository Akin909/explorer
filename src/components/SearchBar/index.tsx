import * as React from "react";
import { NavContainer, Input, Label } from "./styles";

interface Props {}

export default (props: Props) =>
    <NavContainer>
        <Label>
            Search:
            <Input />
        </Label>
    </NavContainer>;
