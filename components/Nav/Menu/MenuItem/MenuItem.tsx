import React, {ReactNode} from 'react';
import Link from "next/link";
import {NavItem} from "../Menu.style";
import MenuItem from '@mui/material/MenuItem';
interface Props{
    handleClose(e):void,
    children: ReactNode
}
export const MenuFragment:React.FC<Props>=({handleClose, children}) => {
    return (
        <>
            <MenuItem
                sx={{color: "white", backgroundColor: "#101C2B",
                }}
                onClick={handleClose}

            >
                <Link href="/">
                    <a>
                        <NavItem>
                            {children}
                        </NavItem>
                    </a>
                </Link>
            </MenuItem>
        </>
    );
};
