import Head from "next/head";
import { Card } from "components/Card";
import { Container, CardList, ContainerButtons } from "styles/dashboard";
import { Button } from "components/Button";

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