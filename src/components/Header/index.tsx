import React from 'react';
import {
  FaHome,
  FaListUl,
  FaRegHeart,
  FaShoppingBag,
  FaUserAlt,
} from 'react-icons/fa';

import { Container } from './styles';
import NavLink from '../NavLink';

const Header: React.FC = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink href="/Interface">
              <a>
                <FaHome />
                <span>Home</span>
              </a>
            </NavLink>
          </li>

          <li className="bag">
            <div>1</div>
            <NavLink href="/bag">
              <a>
                <FaShoppingBag />
                <span>Bag</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/order">
              <a>
                <FaListUl />
                <span>Order</span>
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink href="/favorites">
              <a>
                <FaRegHeart />
                <span>Favorites</span>
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink href="/profile">
              <a>
                <FaUserAlt />
                <span>Profile</span>
              </a>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
