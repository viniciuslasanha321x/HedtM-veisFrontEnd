import styled, { css } from 'styled-components';

export type colors = 'primary';

interface ContainerProps {
  error?: boolean;
  color?: colors;
  isFocus: boolean;
  isError: boolean;
  isFilled: boolean;
}

const colors = {
  primary: '#e7e7e7',
};

export const Container = styled.label<ContainerProps>`
  background: ${props => colors[props.color || 'primary']};
  border-radius: 7px;
  border: 3px solid #fff;
  padding: 0 15px;
  width: 100%;
  height: 55px;
  color: #1435;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #b2b0b0;
    height: 100%;

    ::placeholder {
      color: #b2b0b0;
    }
    & + input {
      margin-top: 8px;
    }
  }
  button {
    background: transparent;
    border: none;
  }

  ${props =>
    props.isFilled &&
    css`
      border-color: #ababab;
    `}

  ${props =>
    props.isError &&
    css`
      border-color: rgb(255, 85, 76);
    `}

  ${props =>
    props.isFocus &&
    css`
      border-color: #ababab;
    `}
`;

export const Error = styled.span`
  display: block;
  font-size: 12px;
  color: #ff6b63;
  line-height: 1.5;
  margin: 4px 0px 0px 4px;
`;
