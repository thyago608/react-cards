import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from{
    transform: translateX(-400px);
    opacity: 0;
  }
  
  to{
    transform: translateX(0);
    opacity:1;
  }
`;

export const Container = styled.div`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background: white;
  border-radius: 0.5rem;

  width: 260px;
  height: 400px;

  animation: ${animation} 0.4s ease-in-out;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

export const ContainerImage = styled.div`
  margin-bottom: 2rem;

  position: relative;

  width: 200px;
  height: 200px;

  border-radius: 50%;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-align: center;

  width: 80%;
`;
