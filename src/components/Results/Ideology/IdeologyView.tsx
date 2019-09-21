import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

export type Props = {
  ideology: string
};

library.add(faQuestion);

const IdeologyView: React.FC<Props> = (props) => {
  const { ideology } = props;
  return (
    <div className="ideology__container">
      <div className="ideology">
        <div className="ideology__info">
          <div className="ideology__name">{ideology}</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://duckduckgo.com/?q=${ideology}`}
            className="ideology__btn"
          >
            <FaIcon icon={faQuestion} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IdeologyView;
