import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 92%;
  margin: 0 auto;
  background: #fff;
  border-radius: 4px;

  @media (max-width: 500px) {
    min-width: 450px;
    margin: 0 auto;
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    width: 310px;
    padding: 9px;
    border-bottom: 1px solid #eee;
  }

  img {
    margin: 0 20px 0 20px;
    height: 100px;
  }

  strong {
    color: #333;
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
  }

  div {
    display: flex;
    align-items: center;

    input {
      background: transparent;
      border: none;
      color: #7159c1;
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
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#7159c1')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#7159c1')};
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
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
    }
  }

  span {
    margin-left: 30px;
    color: #999;
    font-weight: bold;
  }

  strong {
    margin-left: 30px;
    font-size: 28px;
    margin-left: 5px;

    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
`;
