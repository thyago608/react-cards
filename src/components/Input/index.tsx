import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

export function Input({ label, name, ...rest }: InputProps) {
    return (
        <Container>
            {label && <label htmlFor={name}>{label}</label>}
            <input id={name} {...rest} />
        </Container>
    );
}