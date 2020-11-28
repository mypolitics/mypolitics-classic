import React from 'react';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Results } from '../../../store/results/types';
import { ElementWrapper, Container, Button } from './RateStyle';

interface Props {
  results: Results
}

const RateView: React.FC<Props> = ({ results }) => {
  const [clickType, setClickType] = React.useState<'positive' | 'negative' | 'none'>('none');

  const handleClick = (type: 'positive' | 'negative') => {
    ReactGA.event({
      category: 'ResultsRate',
      action: 'Results Rate Button Clicked',
      label: type,
    });

    ReactPixel.trackCustom('ResultsRateButtonClick', {
      id: results.id,
      type,
    });

    setClickType(type);
    localStorage.removeItem('last-id');
  };

  if (clickType !== 'none') {
    return (
      <Container variant={clickType}>
        {
          clickType === 'positive'
            ? <FaIcon icon={faThumbsUp} />
            : <FaIcon icon={faThumbsDown} />
        }
      </Container>
    );
  }

  return (
    <Container>
      <ElementWrapper>
        Poprawne?
      </ElementWrapper>
      <ElementWrapper>
        <Button variant="negative" onClick={() => handleClick('negative')}>
          <FaIcon icon={faThumbsDown} />
        </Button>
      </ElementWrapper>
      <ElementWrapper>
        <Button variant="positive" onClick={() => handleClick('positive')}>
          <FaIcon icon={faThumbsUp} />
        </Button>
      </ElementWrapper>
    </Container>
  );
};

export default RateView;
