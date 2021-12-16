import React, {ReactNode} from 'react';
import Button from "@mui/material/Button";

interface Props{
    width: number,
    sx: object,
    children: ReactNode
}
export const PurpleBorderedButton:React.FC<Props> = ({children, sx=[], width}) => {
    return (
        <Button
            variant="contained"
            sx={[
                {
                    border: 1,
                    borderColor: "#AE8DE5",
                    width: {width},
                    height: "40px",
                    marginRight: "20px",
                    color: "#AE8DE5",
                    lineHeight: "15px"
                },
                ...(Array.isArray(sx) ? sx : [sx])
            ]}
        >
            {children}
        </Button>
    );
};

