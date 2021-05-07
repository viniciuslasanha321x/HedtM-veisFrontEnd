/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Navbar, Logo, Input } from './_styles';

const SearchNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(function onFirstMount() {
    const handleChangeHeaderBackground = () => {
      if (window.scrollY >= 10) {
        return setIsScrolled(true);
      }
      return setIsScrolled(false);
    };

    window.addEventListener('scroll', handleChangeHeaderBackground);
  }, []);
  return (
    <Navbar isScrolled={isScrolled}>
      <Logo>
        <Image
          src="/assets/LogoInterface.svg"
          alt="Image Logo"
          width={250}
          height={72}
        />
        <Input>
          <input placeholder="Search Product" />
          <button type="submit">
            <Image
              src="/assets/IconSearch.svg"
              alt="search icon"
              width={14}
              height={16}
            />
          </button>
        </Input>
      </Logo>
    </Navbar>
  );
};

export default SearchNavbar;
