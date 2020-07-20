import React from 'react';

import './Ideology.scss';
import findIdeology from 'utils/ideologyFinder';
import { SpheresType } from 'utils/spheresCalculator';
import IdeologyView from './IdeologyView';

interface Props {
  spheresResults: SpheresType;
}

const Ideology: React.FC<Props> = ({ spheresResults }) => {
  const getIdeology = React.useCallback(findIdeology, [spheresResults]);
  const ideology = getIdeology(spheresResults);

  return (
    <IdeologyView
      ideology={ideology}
    />
  );
};

export default Ideology;
