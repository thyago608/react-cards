import { HTMLAttributes } from "react";
import Image from "next/image";
import { Container } from "./styles";

type LogoCardProps = HTMLAttributes<HTMLDivElement> & {
    point: number;
    rotate?: boolean;
};

export function LogoCard({ rotate = false, point, ...rest }: LogoCardProps) {

    return (
        <Container toSpin={rotate} {...rest} >
            <span>{point}</span>
            <div>
                <Image src="/baralho.png" layout="fill" />
            </div>
        </Container>
    );
}