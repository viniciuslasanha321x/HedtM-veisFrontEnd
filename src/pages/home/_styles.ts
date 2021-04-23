import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Border = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  background-color: #a5b5c2;
  width: 732px;
  top: -60%;
  height: 320%;
  left: -16px;

  @media (max-width: 1190px) {
    width: 120%;
  }

  @media (min-width: 1190px) {
    width: 42%;
  }

  @media (max-width: 660px) {
    width: 150%;
  }

  @media (max-width: 540px) {
    width: 200%;
  }

  @media (max-width: 410px) {
    width: 250%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

export const Informations = styled.section`
  display: flex;
  justify-content: center;

  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 1190px) {
    margin-top: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  margin: 32px 0 0 64px;

  @media (max-width: 1190px) {
    display: flex;
    justify-content: center;
    width: 100%;
    left: 0;
  }

  @media (max-width: 410px) {
    position: initial;
    justify-content: center;
    align-items: center;
    margin-left: -25px;

    > div {
      display: flex;
      justify-content: center;
    }
  }

  img {
    width: 72%;
  }
`;

export const Merchan = styled.div`
  display: flex;
  margin: 80px 0 0 64px;
  width: 408px;

  h2 {
    font-family: Poppins;
    font-weight: 700;
    position: absolute;
    font-size: 25px;
    color: #d8d8d8;
    width: 408px;

    @media (min-width: 2560px) {
      margin-top: 97px;
      width: 700px;
      font-size: 44px;
    }

    @media (max-width: 1190px) {
      display: none;
    }
  }
`;

export const SofaImage = styled.div`
  display: flex;
  margin-top: 432px;
  left: 72px;
  position: absolute;
  transition: 300ms all;

  img {
    width: 700px;
  }

  @media (max-height: 650px) {
    display: none;
  }

  @media (max-width: 410px) {
    display: none;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: -190px 0 0 45vw;

  @media (max-width: 1190px) {
    margin: -250px 0 0 0;
  }

  @media (max-height: 455px) {
    margin-top: -72px;
  }

  @media (max-width: 410px) {
    margin-top: -224px;
  }
`;

export const TextInformation = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  h2 {
    font-weight: 700;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 38px;
    color: #d2d2d2;

    @media (max-width: 1190px) {
      color: #e4e2e2;
      font-size: 26px;
    }

    @media (max-width: 290px) {
      color: #e4e2e2;
      font-size: 22px;
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
