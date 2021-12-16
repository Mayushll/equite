import Link from 'next/link'
import React from "react";
import { NavItem } from "./Links.style";
import Languages from "../../../store/Languages";
import {observer} from "mobx-react";

export const Links:React.FC = observer(() => {
    return (
        <>
            <Link href="/">
                <a>
                    <NavItem>
                        {Languages.language === "ru" ? Languages.languages.nav.homepage.ru : Languages.languages.nav.homepage.eng}
                    </NavItem>
                </a>
             </Link>
            <Link href="/">
                <a>
                    <NavItem>
                        {Languages.language === "ru" ? Languages.languages.nav.ratings.ru : Languages.languages.nav.ratings.eng}
                    </NavItem>
                </a>
            </Link>
            <Link href="/">
                <a>
                    <NavItem>
                        {Languages.language === "ru" ? Languages.languages.nav.blog.ru : Languages.languages.nav.blog.eng}
                    </NavItem>
                </a>
            </Link>
            <Link href="/">
                <a>
                    <NavItem>
                        {Languages.language === "ru" ? Languages.languages.nav.PRO.ru : Languages.languages.nav.PRO.eng}
                    </NavItem>
                </a>
            </Link>
        </>
    );
});