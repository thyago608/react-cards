import styled from "styled-components";

export const Container = styled.header`
  background: #111;

  @media (min-width: 768px) {
    margin-top: 1rem;
  }
`;

type ContentProps = {
  hasUser: boolean;
};

export const Content = styled.div<ContentProps>`
  max-width: 1000px;
  margin: 0 auto;

  height: 6rem;
  padding: 0 1rem;

  display: flex;
  justify-content: ${(props) => (props.hasUser ? "space-between" : "center")};
  align-items: center;
`;

export const Logo = styled.a`
  position: relative;

  width: 50px;
  height: 50px;

  cursor: pointer;

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export const User = styled.div`
  width: 120px;

  text-align: center;
  line-height: 1.4rem;
  color: #d2d2d2;
`;
