import * as React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

import './Actions.scss';

library.add(faArrowRight);

const ActionsView: React.FC = () => {
  const copyToClipboard = (e: any) => {
    e.target.select();
    document.execCommand('copy');
  };

  return (
    <div className="results__actions">
      <Link className="results__actions__ideologies" smooth to="/#ideologies">
        Opisy ideologii
        <FaIcon icon={faArrowRight} />
      </Link>
      <div className="results__actions__share">
        <span>Udostępnij</span>
        <input
          type="text"
          value={window.location.toString()}
          onFocus={(e) => copyToClipboard(e)}
          readOnly
        />
      </div>
    </div>
  );
};

export default ActionsView;
