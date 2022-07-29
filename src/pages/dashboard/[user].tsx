import { useState, } from "react";
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
    nextPage: number;
    error: ErrorResponse;
}

export default function User({ cards, nextPage, error }: DashboardProps) {
    const [page, setPage] = useState(nextPage);
    const [items, setItems] = useState(cards);

    async function handleMoreCard() {
        const query = "On Top Of The World";

        const response = await pexels.photos.search({ query, page, per_page: 5 });

        if ("photos" in response) {
            const photosLength = response.photos.length > 0 ? response.photos.length : 0;

            if (photosLength > 0) {
                const card = response.photos.map((photo: PhotoPexelsUpdated) => {
                    return {
                        id: photo.id,
                        title: photo.photographer,
                        image: photo.src.large2x,
                        description: String(photo.alt),
                        point: Math.floor(Math.random() * 10 + 1)
                    }
                });

                card.splice(1, card.length);

                setItems([...items, ...card]);
                setPage(page + 1);
            }
        }
    }


    function handleSortCards() {
        const sortedArray = items.sort((a, b) => {
            if (a.point > b.point) {
                return 1;
            }
            return -1;
        })
        setItems([...sortedArray]);
    }
    return (
        <>
            <Head>
                <title>Dashboard | ReactCards</title>
            </Head>
            <Container>
                <CardList>
                    {items.map(card => (
                        <Card key={card.id} card={card} />
                    ))}
                </CardList>
                <ContainerButtons>
                    <Button
                        text="Puxar mais cartas"
                        color="rgba(255, 0, 34, 0.8)"
                        onClick={handleMoreCard}
                    />
                    <Button
                        text="Embaralhar cartas"
                        color="rgb(7, 119, 34, 1)"
                        onClick={handleSortCards}
                    />
                </ContainerButtons>
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const query = 'On Top Of The World';

    let cards: CardType[] = [];
    let error = { message: '' };
    let nextPage = 1;

    try {
        const response = await pexels.photos.search({ query, per_page: 5 });

        if ("photos" in response) {
            const photosLength = response.photos.length > 0 ? response.photos.length : 0;

            if (photosLength > 0) {
                nextPage = response.page + 1;
                cards = response.photos.map((photo: PhotoPexelsUpdated) => {
                    return {
                        id: photo.id,
                        title: photo.photographer,
                        image: photo.src.large2x,
                        description: String(photo.alt),
                        point: Math.floor(Math.random() * 10 + 1)
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
            nextPage,
            error
        }
    }
}