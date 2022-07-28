import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 6rem);

  max-width: 1000px;
  margin: 0 auto;
`;

export const CardList = styled.section`
  margin-top: 5rem;

  display: grid;
  justify-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
  }
`;
