import * as React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { v1 as uuid } from 'uuid';

import LoadingInfo from 'components/LoadingInfo';
import { Results } from 'store/results/types';

type Props = {
  resultsHistory: Results[]
  onListButtonClick: Function
  loading: boolean
};

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
library.add(faTrash, faPlus);

const ListView: React.FC<Props> = (props) => {
  const { resultsHistory, onListButtonClick, loading } = props;

  return (
    <div className="history__list">
      {resultsHistory.map((history) => (
        <div className="history__el" key={uuid()}>
          <Link className="history__el__info" to={`/results/${history.id}`}>
            {new Date(history.additionDate).toLocaleDateString(
              'pl-PL',
              dateOptions,
            )}
          </Link>
          <button
            className="history__el__btn"
            type="button"
            onClick={() => onListButtonClick(history.id)}
          >
            <FaIcon icon={faTrash} />
          </button>
        </div>
      ))}
      {resultsHistory.length === 0 && !loading && (
        <div className="history__list__error">
          Po wykonaniu quizu twoje poprzednie wyniki pokażą się tutaj
        </div>
      )}
      {loading && <LoadingInfo colorHEX="#111" />}
    </div>
  );
};

export default ListView;
