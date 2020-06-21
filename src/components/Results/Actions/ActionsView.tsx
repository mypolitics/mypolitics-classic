import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import './Actions.scss';
import KoFi from '../../KoFi';

library.add(faArrowRight);

interface Props {
  results: any;
}

const ActionsView: React.FC<Props> = (props) => {
  const { results } = props;

  const copyToClipboard = (e: any) => {
    e.target.select();
    document.execCommand('copy');

    ReactGA.event({
      category: 'Results',
      action: 'Share Button Clicked',
      label: results.id,
    });

    ReactPixel.trackCustom('ResultsShareButtonClick', {
      id: results.id,
    });
  };

  const handleKoFiClick = () => (
    ReactGA.event({
      category: 'KoFi',
      action: 'Donate Button Clicked',
    })
  );

  return (
    <div className="results__actions">
      <KoFi
        color="#29abe0"
        id="R5R11NV4G"
        label="Wspomóż autora :)"
        onClick={handleKoFiClick}
      />
      <div className="results__actions__share">
        <span>Udostępnij</span>
        <input
          type="text"
          value={`https://mypolitics.pl/results/${results.id}`}
          onFocus={(e) => copyToClipboard(e)}
          readOnly
        />
      </div>
    </div>
  );
};

export default ActionsView;
