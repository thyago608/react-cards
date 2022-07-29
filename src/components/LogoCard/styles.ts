import styled, { css } from "styled-components";

type Props = {
  toSpin: boolean;
};

export const Container = styled.div<Props>`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    position: relative;

    width: 25px;
    height: 25px;
  }

  span {
    font-size: 2rem;
    color: #e33434;
  }

  ${(props) =>
    props.toSpin &&
    css`
      transform: rotate(180deg);
    `}
`;
