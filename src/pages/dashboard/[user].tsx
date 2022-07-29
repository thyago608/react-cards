import Head from "next/head";
import { Card } from "components/Card";
import { Container, CardList, ContainerButtons } from "styles/dashboard";
import { Button } from "components/Button";
import { Card as CardType } from "types/card";
import { ErrorResponse } from "pexels";
import { GetServerSideProps } from "next";
import { pexels } from "services/pexels";
import { PhotoPexelsUpdated } from "types/pexels";

type DashboardProps = {
    cards: CardType[];
    error: ErrorResponse;
}

export default function User({ cards, error }: DashboardProps) {
    return (
        <>
            <Head>
                <title>Dashboard | ReactCards</title>
            </Head>
            <Container>
                <CardList>
                    {cards?.map(card => (
                        <Card key={card.id} card={card} />
                    ))}
                </CardList>
                <ContainerButtons>
                    <Button
                        text="Puxar mais cartas"
                        color="rgba(255, 0, 34, 0.8)"
                    />
                    <Button
                        text="Embaralhar cartas"
                        color="rgb(7, 119, 34, 1)"
                    />
                </ContainerButtons>
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const query = 'Nature';
    let cards: CardType[] = [];
    let error = { message: '' };

    try {
        const response = await pexels.photos.search({ query, per_page: 8 });

        if ("photos" in response) {
            const photosLength = response.photos.length > 0 ? response.photos.length : 0;

            if (photosLength > 0) {
                cards = response.photos.map((photo: PhotoPexelsUpdated) => {
                    return {
                        id: photo.id,
                        title: photo.photographer,
                        image: photo.src.original,
                        description: String(photo.alt)
                    }
                });
            }
        }

    } catch (e) {
        error.message = 'Your Request Failed';
    }

    return {
        props: {
            cards,
            error
        }
    }
}