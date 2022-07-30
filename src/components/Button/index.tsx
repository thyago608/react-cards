import { Submitting } from "components/Submitting";
import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    color?: string;
    isLoading?: boolean;
}
export function Button({ text, color = '#4863f7', isLoading = false, ...rest }: ButtonProps) {
    return (
        <Container bgColor={color}
            {...rest}>
            {isLoading ? <Submitting /> : text}
        </Container>
    );
}