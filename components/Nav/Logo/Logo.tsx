import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { NavLogo, NavText } from './Logo.style';

export const Logo:React.FC = () => {
    return (
        <NavLogo>
                <Link href="/">
                    <a>
                        <Image
                            src={logo}
                            alt="image"
                            layout={"fixed"}
                        />
                    </a>
                </Link>
            <NavText>
                <Link href="/">
                    <a>EQUITE.IO</a>
                </Link>
            </NavText>
        </NavLogo>
    );
};