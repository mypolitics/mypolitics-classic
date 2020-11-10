import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

import './Footer.scss';
import { ReactComponent as Logo } from 'assets/vectors/logo-grey.svg';

library.add(faHeart, faCoffee);

const Footer: React.FC = () => (
  <footer className="home__footer">
    <section className="home__footer__section">
      <div className="home__footer__list">
        <Logo className="home__footer__logo" />
      </div>
      <ul className="home__footer__list">
        <li>
          <NavLink to="/privacy">Prywatność</NavLink>
        </li>
        <li>
          <a
            href="https://facebook.com/myPoliticsTest"
            target="_blank"
            rel="noopener noreferrer"
          >
Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/myPolitics__"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mypolitics_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/myPolitics"
            target="_blank"
            rel="noopener noreferrer"
          >
GitHub
          </a>
        </li>
      </ul>
    </section>
    <section className="home__footer__section">
      <span className="home__footer__copyright">
        {'Made with '}
        <FaIcon icon={faHeart} className="heart" />
        {' by '}
        <a
          href="https://orlow.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'Adrian Orłów'}
        </a>
      </span>
    </section>
  </footer>
);

export default Footer;
