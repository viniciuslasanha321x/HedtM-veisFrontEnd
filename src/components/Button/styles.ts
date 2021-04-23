import styled from 'styled-components';
import { shade } from 'polished';

interface ColorButton {
  color: string;
  colorFont: string;
  colorHover: string;
}

export const ButtonComponent = styled.button<ColorButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17rem;
  height: 2.625rem;
  background-color: ${props => props.color};
  border-radius: 0.37rem;
  border: none;
  font-family: Poppins;
  font-weight: 700;
  font-size: 1rem;
  transition: 200ms all;

  span {
    padding: 0.5rem;
    color: ${props => props.colorFont};
  }
  div {
    width: 1.6rem;
  }
  :hover {
    transition: 300ms all;
    background: ${props => props.colorHover};
  }
`;
