import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    color?: string;
}
export function Button({ text, color = '#4863f7', ...rest }: ButtonProps) {
    return (
        <Container
            style={{
                background: color
            }}
            {...rest}>
            {text}
        </Container>
    );
}