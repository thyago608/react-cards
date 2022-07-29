import styled from "styled-components";

export const Container = styled.button`
  height: 2.6rem;
  padding: 0 1.2rem;

  border: 0;
  border-radius: 0.3rem;

  color: white;
  font-weight: 500;
  font-size: 0.95rem;

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;
