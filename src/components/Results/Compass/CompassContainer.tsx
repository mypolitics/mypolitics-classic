import React from 'react';

import './Compass.scss';
import { SpheresType } from 'utils/spheresCalculator';
import CompassView from './CompassView';

type Props = {
  spheresResults: SpheresType
};

const Compass: React.FC<Props> = ({ spheresResults }) => (
  <CompassView
    economics={spheresResults.economics}
    social={spheresResults.social}
  />
);

export default Compass;
