import Image from "next/image";
import { Container, Content, ContainerImage, Title, Description } from "./styles";

type CardProps = {
    card: {
        image?: string;
        name: string;
        description: string;
        value: number;
    }
};

export function Card({ card }: CardProps) {
    return (
        <Container>
            <Content>
                <ContainerImage>
                    <Image src="/baralho.png" alt="baralho" layout="fill" />
                </ContainerImage>
                <Title>{card.name}</Title>
                <Description>{card.description}</Description>
            </Content>
        </Container>
    );
}