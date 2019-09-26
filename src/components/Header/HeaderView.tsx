import * as React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

import './Header.scss';
import Nav from './Nav';
import { ReactComponent as Logo } from 'assets/vectors/logo.svg';

library.add(faBars, faTimes);

type Props = {
  toggleNav: Function
  showNav: boolean
};

export const HeaderView: React.FC<Props> = (props) => {
  const { toggleNav, showNav } = props;

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <Logo />
        </Link>
        <button className="header__nav__btn" type="button" onClick={() => toggleNav()}>
          {!showNav && <FaIcon icon={faBars} />}
          {showNav && <FaIcon icon={faTimes} />}
        </button>
      </div>
      <Nav toggleNav={toggleNav} showNav={showNav} />
    </header>
  );
};

export default HeaderView;
