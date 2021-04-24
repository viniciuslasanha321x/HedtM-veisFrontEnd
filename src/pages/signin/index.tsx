import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import { Formik, FormikErrors } from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button';
import signInSchema from './validations';
import { Logo } from '../../components/LogoImageDashboard';
import { SofaImageComponentPageDashboard } from '../../components/SofaImageDashboard';

import {
  Container,
  Content,
  Informations,
  InputSignIn,
  Merchan,
  ContainerInput,
  TextInformation,
  OptionsLogin,
  FormFormik,
} from './_styles';

interface FormValues {
  email: string;
  password: string;
  name: string;
}

const easing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

interface DataClickFormik {
  errors: FormikErrors<FormValues>;
  email;
  password;
  name;
  setErrors: (err: FormikErrors<FormValues>) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const SignIn: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
    name: '',
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Container>
        <Link href="/home">
          <a>
            <Logo
              image="/assets/LogoV2.svg"
              altImage="Image Logo Page SignIn"
              color="#f5ddb1"
            />
          </a>
        </Link>
        <Content>
          <div className="info">
            <Informations>
              <Merchan>
                <motion.h2 variants={fadeInUp}>
                  Oferecemos A Melhor Qualidade E Preço Para Que Você Fique 100%
                  Satisfeito Na Compra Do Seu Móvel
                </motion.h2>
              </Merchan>

              <SofaImageComponentPageDashboard
                image="/assets/SofaGrey.png"
                altImage="second image sofa home"
              />
            </Informations>
          </div>

          <ContainerInput>
            <TextInformation>
              <motion.h2 variants={fadeInUp}>Login</motion.h2>
            </TextInformation>

            <motion.div variants={fadeInUp}>
              <InputSignIn>
                <Formik
                  initialValues={initialValues}
                  validationSchema={signInSchema}
                  onSubmit={values => console.log(values)}
                >
                  {({ touched, errors, values }) => (
                    <FormFormik>
                      <div className="separateInput">
                        <Input
                          name="email"
                          type="text"
                          placeholder="E-mail"
                          error={errors.email}
                          touched={touched.email}
                          value={values.email}
                        />
                      </div>

                      <Input
                        name="password"
                        type="password"
                        iconEye
                        placeholder="Senha"
                        error={errors.password}
                        touched={touched.password}
                        value={values.password}
                      />

                      <div className="separateButton">
                        <Button
                          title="Continuar"
                          color="#E9C98F"
                          colorFont="#F8f8f8"
                          colorHover="PaleGoldenrod"
                          type="button"
                        />
                      </div>
                    </FormFormik>
                  )}
                </Formik>
                <OptionsLogin>
                  <Link href="/resetpassword">
                    <a className="redefinePasswordMedia" href="">
                      Redefinir Senha
                    </a>
                  </Link>
                  <span>|</span>
                  <Link href="/signup">
                    <a className="signinMedia" href="">
                      Cadastrar-se
                    </a>
                  </Link>
                </OptionsLogin>
              </InputSignIn>
            </motion.div>
          </ContainerInput>
        </Content>
      </Container>
    </motion.div>
  );
};

export default SignIn;
