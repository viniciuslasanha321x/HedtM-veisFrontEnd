/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://www.stripe.com/docs/payments/integration-builder

import React, { useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useCart } from '../../hooks/useCart';
import { Container, ContainerTeste, ButtonPay } from './_styles';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#87bbfd',
      },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};

const CardField = ({ onChange }) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

const Submit = ({ processing, error, children, disabled }) => (
  <button
    className={`Submit ${error ? 'Submit--error' : ''}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? 'Processing...' : children}
  </button>
);

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);

const ResetButton = ({ onClick }) => (
  <button type="button" className="ResetButton" onClick={onClick}>
    Continue Comprando
  </button>
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: '',
    name: '',
  });

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement('card').focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
    }
  };

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      email: '',
      name: '',
    });
  };

  const { handleCheckout } = useCart();

  return paymentMethod ? (
    <Container>
      <div className="Result">
        <div className="ResultTitle" role="alert">
          Pagamento Feito Com Sucesso
        </div>
        <div className="ResultMessage">
          Obrigado Por Comprar Na HedtMóveis Agradecemos Pela Preferência
        </div>
        <ResetButton onClick={reset} />
      </div>
    </Container>
  ) : (
    <ContainerTeste>
      <form className="Form" onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <Field
            label="Name"
            id="name"
            type="text"
            placeholder="Jane Doe"
            required
            autoComplete="name"
            value={billingDetails.name}
            onChange={e => {
              setBillingDetails({ ...billingDetails, name: e.target.value });
            }}
          />
          <Field
            label="Email"
            id="email"
            type="email"
            placeholder="janedoe@gmail.com"
            required
            autoComplete="email"
            value={billingDetails.email}
            onChange={e => {
              setBillingDetails({ ...billingDetails, email: e.target.value });
            }}
          />
        </fieldset>
        <fieldset className="FormGroup">
          <CardField
            onChange={e => {
              setError(e.error);
              setCardComplete(e.complete);
            }}
          />
        </fieldset>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}

        {/* <Link href="/signup">
          <a className="signinMedia" href=""> */}
        <ButtonPay onClick={handleCheckout}>
          <Submit processing={processing} error={error} disabled={!stripe}>
            Pagar
          </Submit>
        </ButtonPay>
        {/* </a>
        </Link> */}
      </form>
    </ContainerTeste>
  );
};

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
    },
  ],
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const App = () => {
  return (
    <div className="AppWrapper">
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default App;
function id(id: any) {
  throw new Error('Function not implemented.');
}
