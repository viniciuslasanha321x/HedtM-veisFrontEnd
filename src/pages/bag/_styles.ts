import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div``;

export const ContainerTable = styled.div`
  width: 80%;
  margin: 0 auto;
  background: #e8e8e8;
  border-radius: 10px;
  border: 2px solid #d3d3d3;
  padding-bottom: 72px;
  overflow-x: hidden;

  @media (max-width: 850px) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 458px) {
    min-width: 600px;
    margin: 0 auto;
  }
`;

export const Navbar = styled.nav`
  z-index: 999;
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 100ms;
`;

export const Logo = styled.div``;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #868686;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    width: 310px;
    padding: 7px 0 7px 0;
    border-bottom: 1px solid #d3d3d3;
  }

  img {
    margin: 16px 20px 0 20px;
    height: 100px;
  }

  strong {
    color: #868686;
    display: block;

    @media (max-width: 650px) {
      font-size: 13px;
    }
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #6a6a6a;
  }

  div {
    display: flex;
    align-items: center;

    input {
      background: transparent;
      border: none;
      color: #b0b0b0;
      font-weight: 600;
      padding: 6px;
      width: 20px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #b0b0b0;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${shade(0.2, '#b0b0b0')};
      }
    }

    &:disabled {
      svg {
        color: ${shade(0.2, '#b0b0b0')};
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 650px) {
    img {
      min-width: 50%;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  footer {
    margin: 20px;

    button {
      background: #d6d5d5;
      color: #9d9d9d;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.02, '#d6d5d5')};
      }
    }
  }

  span {
    margin-left: 30px;
    color: #6a6a6a;
    font-weight: bold;
  }

  strong {
    margin-left: 30px;
    font-size: 28px;
    margin-left: 5px;
    color: #6a6a6a;

    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
`;
