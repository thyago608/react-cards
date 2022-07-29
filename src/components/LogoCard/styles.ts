import styled, { css } from "styled-components";

type Props = {
  rotate: boolean;
};

export const Container = styled.div<Props>`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.rotate &&
    css`
      transform: rotate(180deg);
    `}

  > div {
    position: relative;

    width: 25px;
    height: 25px;
  }

  span {
    font-size: 1.6rem;
    color: #e33434;
  }
`;
