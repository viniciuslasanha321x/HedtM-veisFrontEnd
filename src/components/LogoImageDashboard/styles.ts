import styled from 'styled-components';

interface ColorProps {
  color: string;
  colorMedia: string;
}

export const LogoComponent = styled.div<ColorProps>`
  display: flex;
  width: 40%;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.color};
  z-index: 999;

  & div {
    width: 180px;
    margin-left: 50px;

    img {
      width: 100%;
    }
  }

  @media (max-width: 1190px) {
    background-color: ${props => props.colorMedia};
    width: 100%;

    & div {
      width: 150px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;

    & div {
      width: 150px;
      margin-left: 0;
    }
  }
`;
