import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import Button from '../../components/Button';
import { Logo } from '../../components/LogoImageDashboard';
import { SofaImageComponentPageDashboard } from '../../components/SofaImageDashboard';

import {
  Container,
  Content,
  Informations,
  Merchan,
  ContainerInput,
  TextInformation,
  ButtonsStructure,
} from './_styles';

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
const Home: React.FC = () => (
  <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
    <Container>
      <Link href="/home">
        <a>
          <Logo
            image="/assets/Logo.svg"
            altImage="logo image home"
            color="#a5b5c2"
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
              image="/assets/Sofa.png"
              altImage="primary image sofa home"
            />
          </Informations>
        </div>

        <ContainerInput>
          <TextInformation>
            <motion.h2 variants={fadeInUp}>Login</motion.h2>
          </TextInformation>

          <motion.div variants={fadeInUp}>
            <ButtonsStructure>
              <Link href="/signin">
                <a>
                  <Button title="Login" />
                </a>
              </Link>
              <div className="separateButton">
                <Link href="/signup">
                  <a>
                    <Button title="Cadastre-se" />
                  </a>
                </Link>
              </div>
            </ButtonsStructure>
          </motion.div>
        </ContainerInput>
      </Content>
    </Container>
  </motion.div>
);

export default Home;
