import styled, { css } from "styled-components";

type Props = {
  logged: boolean;
};

export const Container = styled.header<Props>`
  position: sticky;
  top: 0;

  z-index: 2;

  background: ${(props) => (props.logged ? "#111" : "#222")};

  transition: background-color 0.5s ease-in-out;
`;

export const Content = styled.div<Props>`
  max-width: 1000px;
  margin: 0 auto;

  height: 7rem;
  padding: 0 1rem;

  display: flex;
  justify-content: ${(props) => (props.logged ? "space-between" : "center")};
  align-items: center;
`;

export const Logo = styled.div<Props>`
  ${(props) =>
    !props.logged &&
    css`
      margin-top: 3rem;
    `}
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #f2f2f2;
    font-size: 2rem;
  }
`;

export const User = styled.div`
  width: 120px;

  text-align: center;
  line-height: 1.4rem;
  color: #d2d2d2;
`;
