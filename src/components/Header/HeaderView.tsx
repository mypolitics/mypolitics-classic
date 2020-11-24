import * as React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

import './Header.scss';
import { ReactComponent as Logo } from 'assets/vectors/logo.svg';
import Nav from './Nav';
import { ThemeContext } from '../App/ThemeContext';

library.add(faBars, faTimes, faSun);

type Props = {
  toggleNav: Function
  showNav: boolean
};

export const HeaderView: React.FC<Props> = (props) => {
  const { toggleNav, showNav } = props;
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newValue = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newValue);
    setTheme(newValue);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <button className="header__nav__btn header__nav__btn-mode" type="button" onClick={() => toggleTheme()}>
            <FaIcon icon={faSun} />
          </button>
          <button className="header__nav__btn" type="button" onClick={() => toggleNav()}>
            {!showNav && <FaIcon icon={faBars} />}
            {showNav && <FaIcon icon={faTimes} />}
          </button>
        </div>
      </div>
      <Nav toggleNav={toggleNav} showNav={showNav} />
    </header>
  );
};

export default HeaderView;
