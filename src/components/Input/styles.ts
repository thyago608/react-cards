import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  label {
    color: #f5f5f5;
    font-size: 1.2rem;
  }

  input {
    padding: 0 1rem;
    height: 2.8rem;
    border-radius: 0.3rem;

    background: none;

    border: 1px solid #757575;

    color: #d1d1d1;
    font-size: 1.2rem;

    outline: none;

    transition: border-color 0.4s ease-in-out;

    &::placeholder {
      color: #d1d1d1;
      font-size: 1rem;
    }
  }
`;
