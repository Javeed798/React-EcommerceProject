/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';

const Nav = () => {
  return (
    <NavContainer>
      {/* 1 -> NavContainer */}
      <div className='nav-center'>
        <div className='nav-header'>
          {/* 2 Adding the logo here and then assigning the button as a sidebar so that i can have a toggle button so that i can make my page responsive */}
          <Link to='/'>
            <img src={logo} alt='Ninjas Sloth' />
          </Link>
          <button type='button' className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        {/* 3. To show the links to be displayed in the navbar I am importing it from the links component  
        after importing i have iterated over it cozz its an array and destructured that component and inside the <Link> i have mapped
        my url and the text to be displayed*/}
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        {/* 4. I have to display the CartButtons so that I can have some idea of about what should be displayed over there
        Go to the CartButtons.js --->>> suuuuuuuiiiiiiiiiiiiiiiiii going to CartButtons.js
          */}
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
