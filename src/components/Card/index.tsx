import Image from "next/image";
import { Card as CardType } from "types/card";
import { Container, Content, ContainerImage, Title, Description } from "./styles";

type CardProps = {
    card: CardType;
};

export function Card({ card }: CardProps) {
    return (
        <Container>
            <Content>
                <ContainerImage>
                    <Image src={card.image} alt={card.description} layout="fill" />
                </ContainerImage>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
            </Content>
        </Container>
    );
}