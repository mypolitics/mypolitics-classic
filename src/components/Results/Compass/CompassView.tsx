import * as React from 'react';
import './Compass.scss';

import { SpheresVariant, SpheresType } from 'utils/spheresCalculator';
import { Results } from '../../../store/results/types';

interface Props {
  results: Results
  spheresResults: SpheresType
  spheresCalcMethod: SpheresVariant
  onSpheresCalcMethod(method: SpheresVariant): void
}

const CompassView: React.FC<Props> = ({
  spheresCalcMethod,
  spheresResults,
  onSpheresCalcMethod,
  results,
}) => {
  const { economics, social } = spheresResults;
  const { progressivism, traditionalism } = results.axes;
  const isClassic = spheresCalcMethod === SpheresVariant.Classic;

  const thirdAxePosition = (
    Math.abs((traditionalism - progressivism) - 100) / 2
  );

  const axisResultsInfo = (value: number): string => (
    value.toFixed(1)
  );

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
      <div className={`compass ${isClassic ? 'classic' : ''}`}>
        <div className="compass__chart">
          <img src="/vectors/chart.svg" alt="Wykres" />
          <div className="compass__point" style={style} />
        </div>
        {isClassic && (
          <div className="compass__gradient">
            <div className="compass__gradient-inner">
              <div
                className="compass__gradient-pointer"
                style={{ top: `${thirdAxePosition}%` }}
              />
            </div>
          </div>
        )}
        <div className="compass__info">
          <div className="compass__info__el">
            <div className="compass__info__title">
              Ekonomiczna:&nbsp;
            </div>
            <div className="compass__info__value">
              {axisResultsInfo(economics)}
            </div>
          </div>
          <div className="compass__info__el">
            <div className="compass__info__title">
              Społeczna:&nbsp;
            </div>
            <div className="compass__info__value">
              {axisResultsInfo(social)}
            </div>
          </div>
          {isClassic && (
            <div className="compass__info__el">
              <div className="compass__info__title">
                Progresywizm:&nbsp;
              </div>
              <div className="compass__info__value">
                {axisResultsInfo(thirdAxePosition / 100)}
              </div>
            </div>
          )}
        </div>
        <div className="compass__method">
          <span className="method__title">
            Tryb
          </span>
          <button
            type="button"
            className={`method__button ${isClassic && 'selected'}`}
            onClick={() => onSpheresCalcMethod(SpheresVariant.Classic)}
          >
            Klasyczny
          </button>
          <button
            type="button"
            className={`method__button ${!isClassic && 'selected'}`}
            onClick={() => onSpheresCalcMethod(SpheresVariant.Extended)}
          >
            Rozszerzony
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompassView;
