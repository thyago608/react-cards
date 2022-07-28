import Head from "next/head";
import { Card } from "components/Card";
import { Container, CardList } from "styles/dashboard";

export default function User() {
    return (
        <>
            <Head>
                <title>Dashboard | ReactCards</title>
            </Head>
            <Container>
                <CardList>
                    <Card card={{
                        name: "Lorem ipsum dolor",
                        description: "Lorem ipsum dolor",
                        value: 2
                    }} />
                    <Card card={{
                        name: "Lorem ipsum dolor",
                        description: "Lorem ipsum dolor",
                        value: 2
                    }} />

                    <Card card={{
                        name: "Lorem ipsum dolor",
                        description: "Lorem ipsum dolor",
                        value: 2
                    }} />

                    <Card card={{
                        name: "Lorem ipsum dolor",
                        description: "Lorem ipsum dolor",
                        value: 2
                    }} />

                    <Card card={{
                        name: "Lorem ipsum dolor",
                        description: "Lorem ipsum dolor",
                        value: 2
                    }} />
                </CardList>
            </Container>
        </>
    );
}