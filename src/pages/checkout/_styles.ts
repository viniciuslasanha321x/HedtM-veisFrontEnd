import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Teste = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 72px;

  @media (max-width: 1220px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ContainerTableCheckout = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;

  @media (max-width: 1150px) {
    min-width: 60%;
  }

  @media (max-width: 1220px) {
    width: 100%;

    h1 {
      text-align: center;
      position: none;
      margin: 0;
    }
  }

  @media (max-width: 1300px) {
    min-width: 30%;
  }

  @media (min-width: 2100px) {
    max-width: 30%;
  }

  @media (min-width: 2440px) {
    max-width: 25%;
  }

  h1 {
    position: absolute;
    margin: 150px 0 0 62px;
    font-weight: 600;
    color: #626262;
  }
`;

export const ContainerStripe = styled.div`
  margin-top: 152px;

  h1 {
    font-weight: 600;
    color: #626262;
    margin: 0 0 30px 16px;
  }

  @media (max-width: 1220px) {
    min-width: 50%;
    margin: 0 auto;
  }
`;
