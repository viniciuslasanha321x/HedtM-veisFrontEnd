import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  gap: 27px;
  margin: 64px 24px 0 24px;
  align-items: center;
  place-content: center;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    margin-bottom: 32px;
    transition: 300ms all;
    width: 80%;

    :hover {
      transition: 300ms all;
      transform: scale(1.1);
    }
  }
`;

export const ListImages = styled.ul`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  list-style: none;
`;

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  span {
    align-items: center;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 600;
    color: #b7b5b5;
    display: flex;
    justify-content: center;
  }
`;
