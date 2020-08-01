import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

import './Actions.scss';

library.add(faShare);

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

  const handleLikeClick = () => {
    ReactGA.event({
      category: 'Like',
      action: 'Like Button Clicked',
      label: results.id,
    });

    ReactPixel.trackCustom('ResultsLikeButtonClick', {
      id: results.id,
    });
  };

  return (
    <div className="results__actions">
      <div
        className="results__actions__like"
        onClick={handleLikeClick}
      >
        <iframe
          title="fb-like"
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FmyPoliticsTest%2F&width=143&layout=button_count&action=like&size=large&share=false&height=28&appId=4144384798967211"
          width="143"
          height="28"
          scrolling="no"
          frameBorder="0"
          allow="encrypted-media"
          allowTransparency
        />
      </div>
      <div className="results__actions__share">
        <span>
          <FaIcon icon="share" />
        </span>
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
