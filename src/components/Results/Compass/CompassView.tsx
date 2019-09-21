import * as React from 'react';

import chart from 'assets/vectors/chart.svg';
import { SpheresType } from 'utils/spheresCalculator';

type Props = SpheresType;

const CompassView: React.FC<Props> = (props) => {
  const { economics, social } = props;

  const axisResultsInfo = (value: number): string => {
    let wing = '';
    if (value < -0.33) {
      wing = 'lewica';
    } else if (value < 0.33) {
      wing = 'centrum';
    } else {
      wing = 'prawica';
    }

    return `${value.toFixed(1)} (${wing})`;
  };

  const correctPosition = (value: number): string => {
    const correctValue = (value / 2 + 0.5) * 100;
    return `calc(${correctValue}% - 0.5rem - 4px)`;
  };

  const style: React.CSSProperties = {
    left: correctPosition(economics),
    top: 'unset',
    bottom: correctPosition(social),
  };

  return (
    <div className="compass__container">
      <div className="compass">
        <div className="compass__chart">
          <img src={chart} alt="Wykres" />
          <div className="compass__point" style={style} />
        </div>
        <div className="compass__info">
          <div className="compass__info__el">
            <div className="compass__info__title">
              Oś ekonomiczna:&nbsp;
            </div>
            <div className="compass__info__value">
              {axisResultsInfo(economics)}
            </div>
          </div>
          <div className="compass__info__el">
            <div className="compass__info__title">
              Oś obyczajowa:&nbsp;
            </div>
            <div className="compass__info__value">
              {axisResultsInfo(social)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompassView;
