import Image from 'next/image'
import burger from "../../../../public/burger.svg"
import React from "react";
interface Props{
    handleClick(e):void
    open: any
}
export const Burger:React.FC<Props> = ({handleClick, open}) => {
    return (
        <Image
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            src={burger}
            width={40}
            height={40}
            onClick={handleClick}
        />
    )
}