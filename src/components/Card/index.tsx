import Image from "next/image";
import { Card as CardType } from "types/card";
import { LogoCard } from "components/LogoCard";
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
                <LogoCard
                    point={card.point}
                    style={{ top: 10, left: 10 }} />
                <LogoCard
                    style={{ bottom: 2, right: 10 }}
                    point={card.point}
                    rotate={true}
                />
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
            </Content>
        </Container>
    );
}