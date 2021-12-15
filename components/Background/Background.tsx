import Image from 'next/image'
import square1 from "../../public/square1.png"
import square2 from "../../public/square2.png"
import background from "../../public/backgroundman.png"
import {Back, PinkSquare, PurpleSquare} from './Background.style';


export const Background:React.FC = () => {
    return (
        <div>
        <Back>
            <div>
                <Image
                    src={background}
                    layout={"fill"}
                    objectFit={"cover"}
                />
            </div>
        </Back>
        <PurpleSquare>
            <Image
                src={square1}
                layout={"responsive"}
                width={330}
                height={330}
                alt="image"
            />
        </PurpleSquare>
        <PinkSquare>
            <Image
                src={square2}
                layout={"responsive"}
                width={330}
                height={330}
                alt="image"
            />
        </PinkSquare>
        </div>
    );
};