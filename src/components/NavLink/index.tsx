import React, { ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface Props extends LinkProps {
  children: ReactElement<HTMLAnchorElement>;
}

const NavLink: React.FC<Props> = ({ children, ...rest }) => {
  const router = useRouter();

  const { href } = rest;

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return <Link {...rest}>{React.cloneElement(children, { className })}</Link>;
};

export default NavLink;
