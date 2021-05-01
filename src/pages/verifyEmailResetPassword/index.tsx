import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import { Formik, FormikErrors } from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button';
import verifyEmailResetPasswordSchema from './validation';
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
} from './styles';

interface FormValues {
  email: string;
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
  setErrors: (err: FormikErrors<FormValues>) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const VerifiyEmailResetPassword: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Container>
        <Link href="/home">
          <a>
            <Logo
              image="/assets/LogoV5.svg"
              altImage="Image Logo Page SignIn"
              color="#AFB47C"
            />
          </a>
        </Link>
        <Content>
          <div className="info">
            <Informations>
              <Merchan>
                <motion.h2 variants={fadeInUp}>
                  Eita Você Perdeu Sua Senha?, Não Se Preocupe, Você Está Nesse
                  Exato Momento Na Página De Solução
                </motion.h2>
              </Merchan>

              <SofaImageComponentPageDashboard
                image="/assets/Table.png"
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
                  validationSchema={verifyEmailResetPasswordSchema}
                  onSubmit={values => console.log(values)}
                >
                  {({ touched, errors, values }) => (
                    <FormFormik>
                      <Input
                        name="email"
                        type="text"
                        placeholder="Coloque Seu Email"
                        error={errors.email}
                        touched={touched.email}
                        value={values.email}
                      />

                      <div className="separateButton">
                        <Button
                          title="Continuar"
                          color="#B3CAA8"
                          colorFont="White"
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

export default VerifiyEmailResetPassword;
