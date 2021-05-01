/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Modules
import React, { memo, useState } from 'react';
import { Container } from './_styles';

const ButtonCart: React.FC = () => {
  const [isVisibleIconCheckedCart, setIsVisibleIconCheckedCart] = useState(
    true,
  );

  async function toggleButton() {
    setIsVisibleIconCheckedCart(!isVisibleIconCheckedCart);
  }

  return (
    <Container>
      <button type="button" onClick={toggleButton}>
        {isVisibleIconCheckedCart ? (
          <img src="/assets/ShoppingCartIcon.svg" />
        ) : (
          <img src="/assets/ShoppingCardIconSelected.svg" />
        )}
      </button>
    </Container>
  );
};

export default memo(ButtonCart);
