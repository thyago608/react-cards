import { HTMLAttributes } from "react";
import Image from "next/image";
import { Container } from "./styles";

type LogoCardProps = HTMLAttributes<HTMLDivElement> & {
    point: number;
    rotate?: boolean;
};

export function LogoCard({ point, rotate = false, ...rest }: LogoCardProps) {
    return (
        <Container {...rest} rotate={rotate}>
            <span>{point}</span>
            <div>
                <Image src="/baralho.png" layout="fill" />
            </div>
        </Container>
    );
}