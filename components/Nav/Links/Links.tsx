import Link from 'next/link'
import React from "react";
import { NavItem } from "./Links.style";

export const Links:React.FC = () => {
    return (
        <>
            <Link href="/">
                <a>
                    <NavItem>
                           Главная
                    </NavItem>
                </a>
             </Link>
            <Link href="/">
                <a>
                    <NavItem>
                        Рейтинги
                    </NavItem>
                </a>
            </Link>
            <Link href="/">
                <a>
                    <NavItem>
                        Блог
                    </NavItem>
                </a>
            </Link>
            <Link href="/">
                <a>
                    <NavItem>
                        PRO
                    </NavItem>
                </a>
            </Link>
        </>
    );
};