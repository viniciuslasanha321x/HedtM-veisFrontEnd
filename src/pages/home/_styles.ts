import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  .info {
    display: flex;
    width: 40%;
    height: 100%;
    background: #a5b5c2;
  }

  @media (max-width: 1190px) {
    background: #a5b5c2;
    height: 150%;

    .info {
      display: none;
    }
  }
`;

export const Informations = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Merchan = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-self: start;
  align-items: start;
  padding: 50px;
  margin-top: 64px;

  h2 {
    font-family: Poppins;
    font-weight: 700;
    font-size: 24px;
    color: #fff;

    @media (min-width: 1800px) {
      font-size: 32px;
      width: 716px;
    }

    @media (min-width: 2100px) {
      margin-top: 96px;
      font-size: 42px;
      width: 716px;
    }

    @media (max-width: 1190px) {
      display: none;
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TextInformation = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  h2 {
    font-weight: 700;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 48px;
    color: #cdcdcd;

    @media (max-width: 1190px) {
      color: #fff;
    }
  }
`;

export const ButtonsStructure = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;

  .separateButton {
    margin-top: 24px;
  }
`;
