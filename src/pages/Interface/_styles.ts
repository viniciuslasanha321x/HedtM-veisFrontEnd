import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Navbar = styled.nav`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
`;

export const Logo = styled.div``;

export const Input = styled.div`
  border-radius: 7px;
  border: 3px solid #e4e1e1;
  padding: 0 15px;
  width: 100%;
  height: 50px;
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
`;

export const CarouselContainer = styled.div`
  margin-top: 80px;
`;

export const CardCategoriesContainer = styled.div`
  h1 {
    margin-top: 72px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #b7b5b5;
    font-size: 42px;
  }
`;

export const CardMostViewedProducts = styled.div`
  margin: 142px 42px 0 42px;

  h1 {
    margin-top: 72px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #b7b5b5;
    font-size: 38px;
  }
`;
