import { useState, useEffect } from "react";
import Head from "next/head";
import { Card } from "components/Card";
import { Container, CardList, ContainerButtons } from "styles/dashboard";
import { Button } from "components/Button";
import { Card as CardType } from "types/card";
import { ToastContainer } from "react-toastify";
import { GetServerSideProps } from "next";
import { pexels } from "services/pexels";
import { api } from "services/api";
import { PhotoPexelsUpdated } from "types/pexels";
import { toastErrorVisible } from "lib/toast";

type DashboardProps = {
    cards: CardType[];
    nextPage: number;
    error: boolean;
}

export default function User({ cards, nextPage, error }: DashboardProps) {
    const [page, setPage] = useState(nextPage);
    const [items, setItems] = useState(cards);
    const [failed, setFailed] = useState(error);

    async function handleMoreCard() {
        const { data } = await api.get('/search', {
            params: {
                page,
            }
        });

        setItems([...items, data.card]);
        setPage(page + 1);
        setFailed(data.error)
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

    useEffect(() => {
        if (failed) {
            toastErrorVisible("Ops, houve um problema no servidor");
        }
    }, [failed])

    return (
        <>
            <Head>
                <title>Dashboard | ReactCards</title>
            </Head>
            <Container>
                {failed &&
                    <ToastContainer />
                }
                <CardList>
                    {items.length > 0 && items.map(card => (
                        <Card key={card.id} card={card} />
                    ))}
                </CardList>
                <ContainerButtons>
                    <Button
                        text="Puxar mais cartas"
                        onClick={handleMoreCard}
                    />
                    <Button
                        text="Embaralhar cartas"
                        onClick={handleSortCards}
                        color="#0821c2"
                    />
                </ContainerButtons>
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const query = 'lion';

    let cards: CardType[] = [];
    let error = false;
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
        error = true;
    }

    return {
        props: {
            cards,
            nextPage,
            error
        }
    }
}