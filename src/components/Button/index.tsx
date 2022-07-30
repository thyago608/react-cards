import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    color?: string;
}
export function Button({ text, color = '#4863f7', ...rest }: ButtonProps) {
    return (
        <Container bgColor={color}
            {...rest}>
            {text}
        </Container>
    );
}