import { useState, FormEvent } from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Container } from "styles/home";
import { toastErrorVisible } from "utils/toast";

export default function Home() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleUsernameSubmission(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false)
        }, 2000);

        if (name.length > 0) {

            router.push(`/dashboard/${name}`);
            return;
        }
        toastErrorVisible("Por favor, digite o seu nome!");
    }

    return (
        <>
            <Head>
                <title>Home | ReactCards</title>
            </Head>
            <Container>
                <ToastContainer />
                <form onSubmit={handleUsernameSubmission}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Button
                        type="submit"
                        text="Ver cartas"
                        isLoading={isLoading}
                    />
                </form>
            </Container>
        </>
    );
}