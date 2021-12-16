import {Buttons} from "./Buttons/Buttons";
import React from "react";
import {MainWrapper} from "./Main.style"
import {Subtitle} from "./Main.style"
import {Title} from "./Main.style"
import Languages from "../../store/Languages";
import {observer} from "mobx-react";


export const Main:React.FC = observer(() => {
    return (
        <MainWrapper sx={{marginBottom: Languages.language === "ru" ? "1.5vh" : "7.5vh"}}>
            <Title>
                <p>{Languages.language === "ru" ? Languages.languages.main.title.ru : Languages.languages.main.title.eng}</p>
            </Title>
            <Subtitle>
                <p>{Languages.language === "ru" ? Languages.languages.main.subtitle.ru : Languages.languages.main.subtitle.eng}</p>
            </Subtitle>
            <Buttons/>
        </MainWrapper>
    );
});