import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import {
  Container,
  Content,
  Informations,
  ButtonsStructure,
  Merchan,
  Logo,
  ContainerInput,
  TextInformation,
  Border,
  SofaImage,
} from './_styles';

import Button from '../../components/Button';

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
      <main>
        <Content>
          <section>
            <Border />
            <Informations>
              <Logo>
                <motion.div variants={fadeInUp}>
                  <img src="/assets/Logo.svg" alt="Image Home" />
                </motion.div>
              </Logo>

              <Merchan>
                <motion.h2 variants={fadeInUp}>
                  Oferecemos A Melhor Qualidade E Preço Para Que Você Fique 100%
                  Satisfeito Na Compra Do Seu Móvel
                </motion.h2>
              </Merchan>
              <SofaImage>
                <motion.div
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <img src="/assets/Sofa.png" alt="Image Home" />
                </motion.div>
              </SofaImage>

              <ContainerInput>
                <TextInformation>
                  <motion.h2 variants={fadeInUp}>O QUE VOCÊ PREFERE?</motion.h2>
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
            </Informations>
          </section>
        </Content>
      </main>
    </Container>
  </motion.div>
);

export default Home;
