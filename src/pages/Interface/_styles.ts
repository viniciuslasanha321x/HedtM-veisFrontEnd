import styled from 'styled-components';

interface HeaderProps {
  isScrolled: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Navbar = styled.nav<HeaderProps>`
  position: fixed;
  top: 0;
  bottom: 300px;
  z-index: 999;
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 300ms;
  background: ${props => (props.isScrolled ? '#E9E7E7' : 'transparent')};
  box-shadow: 0px 30px 29px -25px ${props => (props.isScrolled ? ' rgba(0, 0, 0, 0.24)' : 'transparent')};
`;

export const Logo = styled.div``;

export const Input = styled.div`
  border-radius: 7px;
  border: 3px solid #dad5d5;
  padding: 0 15px;
  width: 100%;
  height: 40px;
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
  margin-top: 196px;
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

  h2 {
    margin-top: 72px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #b7b5b5;
    font-size: 32px;
  }
`;

export const CardPromotions = styled.div`
  margin: 72px 0 72px 0;
  h3 {
    font-weight: 600;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #b7b5b5;
    font-size: 38px;
  }
`;
