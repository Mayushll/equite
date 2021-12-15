import React from "react"
import {Links} from "./Links/Links";
import {Logo} from "./Logo/Logo";
import {NavButtons} from "./NavButtons/NavButtons";
import Menu from "./Menu/Menu"
import { StyledNav } from "./Nav.style";


export const Nav:React.FC = () => {
    return (
        <StyledNav>
                <Logo/>
                <Links/>
                <NavButtons/>
                <Menu/>
        </StyledNav>
    );
};