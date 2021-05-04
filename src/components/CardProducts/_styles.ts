import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 72px;
  margin-top: 64px;
  align-items: center;
  place-content: center;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow-x: hidden;

  img {
    transition: 300ms all;

    :hover {
      transition: 300ms all;
      transform: scale(1.1);
    }
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(auto-fit, 200px);
  }
`;

export const ListImages = styled.ul`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  list-style: none;

  span {
    white-space: nowrap;
    font-size: 18px;
    font-weight: 600;
    color: #b7b5b5;
    display: flex;
    justify-content: center;
  }
`;

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  .column {
    display: flex;
  }

  .price {
    color: #82c969;
    font-size: 16px;
  }

  .discountPrice {
    font-weight: 400;
    font-size: 10px;
    text-decoration: line-through;
  }

  span {
    margin-right: 4px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
