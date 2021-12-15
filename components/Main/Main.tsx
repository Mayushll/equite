import {Buttons} from "./Buttons/Buttons";
import React from "react";
import {MainWrapper} from "./Main.style"
import {Subtitle} from "./Main.style"
import {Title} from "./Main.style"


export const Main:React.FC = () => {
    return (
        <MainWrapper>
            <Title>
                <p>Поделитесь своими результатами</p>
            </Title>
            <Subtitle>
                <p>И получите доверие большого количества инвесторов</p>
            </Subtitle>
            <Buttons/>
        </MainWrapper>
    );
};