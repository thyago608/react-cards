import { Input } from "components/Input";
import { Container, Form } from "styles/home";

export default function Home() {
    return (
        <Container>
            <Form>
                <Input
                    type="text"
                    name="name"
                    label="Digite o seu nome"
                />
            </Form>
        </Container>
    );
}
