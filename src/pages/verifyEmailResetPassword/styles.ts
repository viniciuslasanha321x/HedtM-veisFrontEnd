import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  @media (max-height: 480px) {
    overflow-y: auto;
  }
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
    background: #afb47c;
  }

  @media (max-width: 1190px) {
    background: #afb47c;
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

    @media (min-width: 2440px) {
      margin-top: 96px;
      font-size: 40px;
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
    font-size: 38px;
    color: #cdcdcd;

    @media (max-width: 1190px) {
      color: #fff;
    }
  }
`;

export const InputSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;
`;

export const FormFormik = styled(Form)`
  .FormFormik__signup {
    font-size: 15px;
    color: #cecece;

    a {
      margin-top: 32px;
      font-size: 15px;
      color: rgb(202, 202, 202);
      text-decoration: none;

      &:hover {
        color: rgb(148, 208, 255);
        text-decoration: underline;
      }
    }
  }

  .separateButton {
    margin-top: 24px;
  }
`;
