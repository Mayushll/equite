import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import {Burger} from "./Burger/Burger";
import {StartButton} from "../../Shared/StartButton/StartButton";
import {PurpleBorderedButton} from "../../Shared/PurpleBorderedButton/PurpleBorderedButton";
import { BurgerWrapper, NavItem } from './Menu.style';
import {MenuFragment} from "./MenuItem/MenuItem";
import Languages from "../../../store/Languages";


export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div style={{zIndex: 999999999}}>
            <BurgerWrapper>
                <Burger handleClick={handleClick} open={open}/>
            </BurgerWrapper>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button', disablePadding: true}}
            >
                <MenuFragment handleClose={handleClose}>
                    {Languages.language === "ru" ? Languages.languages.nav.homepage.ru : Languages.languages.nav.homepage.eng}
                </MenuFragment>
                <MenuFragment handleClose={handleClose}>
                    {Languages.language === "ru" ? Languages.languages.nav.ratings.ru : Languages.languages.nav.ratings.eng}
                </MenuFragment>
                <MenuFragment handleClose={handleClose}>
                    {Languages.language === "ru" ? Languages.languages.nav.blog.ru : Languages.languages.nav.blog.eng}
                </MenuFragment>
                <MenuFragment handleClose={handleClose}>
                    {Languages.language === "ru" ? Languages.languages.nav.PRO.ru : Languages.languages.nav.PRO.eng}
                </MenuFragment>
                <MenuFragment handleClose={handleClose}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <StartButton width={108} sx={{}}/>
                        <PurpleBorderedButton width={108} sx={{}}>
                            Войти
                        </PurpleBorderedButton>
                    </div>
                </MenuFragment>
            </Menu>
        </div>
    );
}