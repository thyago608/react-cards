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
import { generateRandomNumber, randomNumbersList } from "utils/randomNumber";
import { PhotoPexelsUpdated } from "types/pexels";
import { toastErrorVisible } from "utils/toast";

type DashboardProps = {
    cards: CardType[];
    nextPage: number;
    error: boolean;
}

export default function User({ cards, nextPage, error }: DashboardProps) {
    const [page, setPage] = useState(nextPage);
    const [items, setItems] = useState(cards);
    const [failed, setFailed] = useState(error);
    const [numberOfRequests, setNumberOfRequests] = useState(0);

    async function handleMoreCard() {
        if (numberOfRequests < 3) {
            const { data } = await api.get('/search', {
                params: {
                    page,
                }
            });

            const cardFormatted = {
                ...data.card,
                point: randomNumbersList[items.length + 1]
            }

            setItems([...items, cardFormatted]);
            setPage(page + 1);
            setFailed(data.error)
            setNumberOfRequests(numberOfRequests + 1);
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

    useEffect(() => {
        if (failed)
            toastErrorVisible("Ops, houve um problema no servidor");

    }, [failed]);

    useEffect(() => {
        generateRandomNumber();

        const itemsFormatted = items.map((item, index) => {
            return {
                ...item,
                point: randomNumbersList[index]
            }
        })

        setItems([...itemsFormatted]);
    }, []);

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
                        style={{
                            cursor: numberOfRequests === 3 ? "not-allowed" : "pointer"
                        }}
                    />
                    <Button
                        text="Embaralhar cartas"
                        onClick={handleSortCards}
                        color="#C62E65"
                    />
                </ContainerButtons>
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const query = 'animals';

    let cards: CardType[] = [];
    let error = false;
    const page = Math.floor(Math.random() * 20 + 1);
    let nextPage = page + 1;

    try {
        const response = await pexels.photos.search({ query, page, per_page: 5 });

        if ("photos" in response) {
            const photosLength = response.photos.length > 0 ? response.photos.length : 0;

            if (photosLength > 0) {
                cards = response.photos.map((photo: PhotoPexelsUpdated, index) => {
                    return {
                        id: photo.id,
                        title: photo.photographer,
                        image: photo.src.large2x,
                        description: String(photo.alt),
                        point: 0
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