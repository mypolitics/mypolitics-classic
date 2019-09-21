import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

library.add(faHeart, faCoffee);

const Footer: React.FC = () => (
  <footer className="home__footer">
    <div className="home__footer__inner">
      <span>
          Made with
        {' '}
        <FaIcon icon={faHeart} />
        {' '}
by
        {' '}
        <a
          href="https://orlow.me"
          target="_blank"
          rel="noopener noreferrer"
        >
Adrian Orłów
        </a>
      </span>
      <span>
        <a
          href="https://github.com/myPolitics"
          target="_blank"
          rel="noopener noreferrer"
        >
GitHub
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
