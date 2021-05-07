import styled from 'styled-components';

interface HeaderProps {
  isScrolled: boolean;
}

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
  transition: all 100ms;
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
