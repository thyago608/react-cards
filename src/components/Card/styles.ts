import styled from "styled-components";

export const Container = styled.div`
  min-width: 240px;
  height: 240px;
  border-radius: 0.3rem;
  background: rgba(72, 99, 247, 0.3);
`;

export const Content = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

export const ContainerImage = styled.div`
  position: relative;

  width: 70px;
  height: 70px;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;
