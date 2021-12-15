import React from 'react';
import {RightButtons} from "./RightButton/RightButtons";
import {LeftButton} from "./LeftButtons/LeftButton";

export const NavButtons:React.FC = () => {
    return (
        <>
            <LeftButton/>
            <RightButtons/>
        </>
    );
};