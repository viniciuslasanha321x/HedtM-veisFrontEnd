import styled from 'styled-components';
import { Form } from 'formik';
import { shade } from 'polished';

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
    background: #f5ddb1;
  }

  @media (max-width: 1190px) {
    background: #f5ddb1;
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
    color: #a8a8a8;

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

  .separateInput {
    margin: 16px 0 16px 0;
  }

  .separateButton {
    margin-top: 24px;
  }
`;

export const OptionsLogin = styled.div`
  font-family: Poppins;
  margin-top: 32px;
  transition: 300ms all;

  span {
    margin: 0 8px 0 8px;
    color: #cecece;

    @media (max-width: 1190px) {
      color: #c2c2c2;
    }
  }

  .redefinePasswordMedia {
    text-decoration: none;
    color: #c2c2c2;

    :hover {
      transition: 400ms all;
      color: ${shade(0.2, '#c2c2c2')};
    }

    @media (max-width: 1190px) {
      color: #c2c2c2;
    }
  }

  .signinMedia {
    text-decoration: none;
    color: #a0a0a0;

    :hover {
      transition: 400ms all;
      color: ${shade(0.2, '#a0a0a0')};
    }

    @media (max-width: 1190px) {
      color: #c2c2c2;

      :hover {
        transition: 400ms all;
        color: ${shade(0.2, '#c2c2c2')};
      }
    }
  }
`;
