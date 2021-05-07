/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
  'pk_test_51InyYbGcZbCCiJcpQGqVu7ycm3SrfJB4RRyxTMovax00EohHOq8FB6ZopuaRWawceSHHVLceAIDc30mroRgEWP2F002yZjyVrx';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
