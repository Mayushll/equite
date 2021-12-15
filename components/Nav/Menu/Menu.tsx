import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import {Burger} from "./Burger/Burger";
import {StartButton} from "../../Shared/StartButton/StartButton";
import {PurpleBorderedButton} from "../../Shared/PurpleBorderedButton/PurpleBorderedButton";
import { BurgerWrapper, NavItem } from './Menu.style';


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
                <MenuItem style={{color: "#101C2B"}} onClick={handleClose}><Link href="/"><a><NavItem>Главная  </NavItem></a></Link></MenuItem>
                <MenuItem sx={{color: "#101C2B"}} onClick={handleClose}><Link href="/"><a><NavItem>   Рейтинги  </NavItem></a></Link></MenuItem>
                <MenuItem sx={{color: "#101C2B"}} onClick={handleClose}><Link href="/"><a><NavItem>   Блог  </NavItem></a></Link></MenuItem>
                <MenuItem sx={{color: "#101C2B"}} onClick={handleClose}><Link href="/"><a><NavItem>   PRO  </NavItem></a></Link></MenuItem>
                <MenuItem sx={{color: "#101C2B"}} onClick={handleClose}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <StartButton width={108} sx={{}}/>
                        <PurpleBorderedButton width={108} sx={{}}>
                            Войти
                        </PurpleBorderedButton>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}