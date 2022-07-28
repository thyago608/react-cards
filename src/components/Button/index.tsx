import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: string;
    text: string;
}
export function Button({ text, color, ...rest }: ButtonProps) {
    return (
        <Container {...rest}>
            {text}
        </Container>
    );
}