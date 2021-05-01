/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Modules
import React, { memo, useState } from 'react';
import { Container } from './_styles';

const ButtonCart: React.FC = () => {
  const [
    isVisibleIconCheckedFavorite,
    setIsVisibleIconCheckedFavorite,
  ] = useState(true);

  async function toggleButton() {
    setIsVisibleIconCheckedFavorite(!isVisibleIconCheckedFavorite);
  }

  return (
    <Container>
      <button type="button" onClick={toggleButton}>
        {isVisibleIconCheckedFavorite ? (
          <img src="/assets/HeartFavoriteIcon.svg" />
        ) : (
          <img src="/assets/HeartFavoriteIconSelected.svg" />
        )}
      </button>
    </Container>
  );
};

export default memo(ButtonCart);
