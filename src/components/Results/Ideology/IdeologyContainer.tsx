import React from 'react';

import './Ideology.scss';
import { SpheresType } from 'utils/spheresCalculator';
import IdeologyView from './IdeologyView';
import { getIdeologyName } from './IdeologyUtils';

interface Props {
  spheresResults: SpheresType;
}

const Ideology: React.FC<Props> = ({ spheresResults }) => {
  const getIdeology = React.useCallback(getIdeologyName, [spheresResults]);
  const ideology = getIdeology(spheresResults);

  return (
    <IdeologyView
      ideology={ideology}
    />
  );
};

export default Ideology;
