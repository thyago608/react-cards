import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  label {
    color: #d1d1d1;
    font-size: 1.2rem;
  }

  input {
    padding: 0 1rem;
    height: 2.8rem;
    border-radius: 0.3rem;

    background: none;
    border: 2px solid #8257e5;

    color: #d1d1d1;
    font-size: 1.2rem;
  }
`;
