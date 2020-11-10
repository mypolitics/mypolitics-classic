import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faTasks,
  faHistory,
  faBug,
  faFlask,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

import { mapStateToProps } from './NavRedux';

library.add(faHome, faTasks, faPlus, faFlask, faHistory, faBug);

type ReduxType = ReturnType<typeof mapStateToProps>;
type NavProps = {
  toggleNav: Function
  showNav: boolean
}
type Props = NavProps & ReduxType

export const NavView: React.FC<Props> = (props) => {
  const { toggleNav, showNav, answers } = props;
  const continues = answers.length > 0;

  return (
    <nav className={`header__nav ${showNav ? 'showed' : ''}`}>
      <NavLink
        activeClassName="active"
        exact
        to="/"
        className="header__nav__el"
        onClick={() => toggleNav()}
      >
        <FaIcon icon={faHome} />
        <span>Strona główna</span>
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/quiz"
        className="header__nav__el"
        onClick={() => toggleNav()}
      >
        <FaIcon icon={faTasks} />
        <span>Quiz</span>
        {continues && <span className="continues">TRWA</span>}
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/history"
        className="header__nav__el"
        onClick={() => toggleNav()}
      >
        <FaIcon icon={faHistory} />
        <span>Historia wyników</span>
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/lab"
        className="header__nav__el"
        onClick={() => toggleNav()}
      >
        <FaIcon icon={faFlask} />
        <span>Lab</span>
      </NavLink>
      <hr />
      <a
        href="https://forms.gle/U7MQzPKHJt2wb8SM6"
        target="_blank"
        rel="noopener noreferrer"
        className="header__nav__el"
      >
        <FaIcon icon={faPlus} />
        <span>Dodaj pytanie</span>
      </a>
      <a
        href="https://forms.gle/nm9uCyCnuVaComyS9"
        target="_blank"
        rel="noopener noreferrer"
        className="header__nav__el"
      >
        <FaIcon icon={faBug} />
        <span>Zgłoś błąd</span>
      </a>
    </nav>
  );
};

export default connect(mapStateToProps)(NavView);
