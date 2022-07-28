import { Input } from "components/Input";
import { Button } from "components/Button";
import { Container } from "styles/home";

export default function Home() {
    return (
        <Container>
            <form>
                <Input
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                />
                <Button text="Ver cartas" />
            </form>
        </Container>
    );
}
