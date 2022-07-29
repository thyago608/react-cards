import { InputHTMLAttributes, forwardRef, ForwardRefRenderFunction } from "react";
import { Container } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

export function Input({ label, name, value, ...rest }: InputProps) {

    const style = rest.type === 'text' ? {
        borderColor: String(value).length === 0 ? '#757575' : '#4863f7',
        borderWidth: String(value).length === 0 ? '1px' : '2px'
    } : {};

    return (
        <Container>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name} {...rest}
                style={style}
            />
        </Container>
    );
}