import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import { Formik, FormikErrors } from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button';
import resetPasswordSchema from './validations';
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
  FormFormik,
} from './_styles';

interface FormValues {
  password: string;
  newpassword: string;
  confirmnewpassword: string;
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
  password;
  newpassword;
  confirmnewpassword;
  setErrors: (err: FormikErrors<FormValues>) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const SignIn: React.FC = () => {
  const initialValues: FormValues = {
    password: '',
    newpassword: '',
    confirmnewpassword: '',
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Container>
        <Link href="/home">
          <a>
            <Logo
              image="/assets/LogoV3.svg"
              altImage="Image Logo Page SignIn"
              color="#836760"
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
                image="/assets/SofaBrown.png"
                altImage="image sofa home"
              />
            </Informations>
          </div>

          <ContainerInput>
            <TextInformation>
              <motion.h2 variants={fadeInUp}>Redefinir Senha</motion.h2>
            </TextInformation>

            <motion.div variants={fadeInUp}>
              <InputSignIn>
                <Formik
                  initialValues={initialValues}
                  validationSchema={resetPasswordSchema}
                  onSubmit={values => console.log(values)}
                >
                  {({ touched, errors, values }) => (
                    <FormFormik>
                      <Input
                        name="newpassword"
                        type="password"
                        placeholder="Nova Senha"
                        error={errors.newpassword}
                        touched={touched.newpassword}
                        value={values.newpassword}
                      />

                      <div className="separateInput">
                        <Input
                          name="confirmnewpassword"
                          type="password"
                          placeholder="Confirme A Senha"
                          error={errors.confirmnewpassword}
                          touched={touched.confirmnewpassword}
                          value={values.confirmnewpassword}
                        />
                      </div>

                      <div className="separateButton">
                        <Button
                          title="Continuar"
                          color="#B98E85"
                          colorFont="White"
                          colorHover="#AE8278"
                          type="submit"
                        />
                      </div>
                    </FormFormik>
                  )}
                </Formik>
              </InputSignIn>
            </motion.div>
          </ContainerInput>
        </Content>
      </Container>
    </motion.div>
  );
};

export default SignIn;
