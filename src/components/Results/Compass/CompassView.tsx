import * as React from 'react';
import './Compass.scss';

import { SpheresCalculatorMethod, SpheresType } from 'utils/spheresCalculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  spheresResults: SpheresType
  spheresCalcMethod: SpheresCalculatorMethod
  onSpheresCalcMethod(method: SpheresCalculatorMethod): void
}

const CompassView: React.FC<Props> = ({
  spheresCalcMethod,
  spheresResults,
  onSpheresCalcMethod,
}) => {
  const { economics, social } = spheresResults;
  const isOldMethod = spheresCalcMethod === SpheresCalculatorMethod.Old;

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
    const roundedValue = Math.round((value + Number.EPSILON) * 100) / 100;
    const correctValue = (roundedValue / 2 + 0.5) * 100;
    return `calc(${correctValue}% - 0.5rem - 2px)`;
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
          <img src="/vectors/chart.svg" alt="Wykres" />
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
        <div className="compass__method">
          <span className="method__title">
            Metoda
            <a
              className="method__button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://l.orlow.me/mypolitics-metoda"
            >
              <FontAwesomeIcon icon="question" />
            </a>
          </span>
          <button
            type="button"
            className={`method__button ${isOldMethod && 'selected'}`}
            onClick={() => onSpheresCalcMethod(SpheresCalculatorMethod.Old)}
          >
            Stara
          </button>
          <button
            type="button"
            className={`method__button ${!isOldMethod && 'selected'}`}
            onClick={() => onSpheresCalcMethod(SpheresCalculatorMethod.New)}
          >
            Nowa
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompassView;
