import { useState, FormEvent } from "react";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Container } from "styles/home";

export default function Home() {
    const router = useRouter();
    const [name, setName] = useState('');

    const toastErrorVisible = () =>
        toast.error("Por favor, digite o seu nome!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    function handleUsernameSubmission(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (name.length > 0) {
            router.push(`/dashboard/${name}`);
            return;
        }
        toastErrorVisible();
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
                        style={{

                        }}
                    />
                    <Button
                        type="submit"
                        text="Ver cartas"
                    />
                </form>
            </Container>
        </>
    );
}