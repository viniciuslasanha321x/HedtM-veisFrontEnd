/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import SearchNavbar from '../../components/SearchNavbar';
import Stripe from '../../components/PaymentStrap/StripeContainer';
import Bag from '../bag';
import {
  Container,
  Teste,
  ContainerTableCheckout,
  ContainerStripe,
} from './_styles';

const Checkout: React.FC = () => {
  return (
    <Container>
      <SearchNavbar />
      <Teste>
        <ContainerStripe>
          <h1>Payment</h1>
          <Stripe />
        </ContainerStripe>
        <ContainerTableCheckout>
          <h1>Checkout Item</h1>
          <Bag
            disableButtonDecrement
            disableButtonIncrement
            removeTrash
            marginQuantity="45px"
            disableLogo
            disableButtonCheckout
          />
        </ContainerTableCheckout>
      </Teste>
    </Container>
  );
};

export default Checkout;
