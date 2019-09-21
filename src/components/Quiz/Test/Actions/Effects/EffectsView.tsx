import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faMinus,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import effectTranslator from 'utils/effectsTranslator';
import { v1 as uuid } from 'uuid';

library.add(faPlus, faMinus, faChevronDown, faChevronUp);

export type Props = {
  disable: boolean
  affirmativeAnswerEffects: string[]
  negativeAnswerEffects: string[]
  showList?: boolean
  toggleList?: Function
};

const EffectsView: React.FC<Props> = (props) => {
  const {
    disable,
    affirmativeAnswerEffects,
    negativeAnswerEffects,
    toggleList,
    showList,
  } = props;

  return (
    <div className="test__effects">
      <button
        onClick={() => (toggleList ? toggleList() : null)}
        type="button"
        disabled={disable}
        className="test__effects__btn"
      >
        Pokaż efekty
        {!showList && <FaIcon icon={faChevronDown} />}
        {showList && <FaIcon icon={faChevronUp} />}
      </button>
      {showList && (
        <div className="test__effects__content">
          <div className="test__effects__block test__effects__block--green">
            <div className="test__effects__block__type test__effects__block__type--green">
              ZGODA
            </div>
            <div className="test__effects__list test__effects__list--green">
              {affirmativeAnswerEffects.map((effect) => (
                <div className="test__effect" key={uuid()}>
                  {effectTranslator('pl-PL', effect)}
                  {' '}
+
                </div>
              ))}
            </div>
          </div>
          <div className="test__effects__block test__effects__block--red">
            <div className="test__effects__block__type test__effects__block__type--red">
              NIEZGODA
            </div>
            <div className="test__effects__list test__effects__list--red">
              {negativeAnswerEffects.map((effect) => (
                <div className="test__effect" key={uuid()}>
                  {effectTranslator('pl-PL', effect)}
                  {' '}
+
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EffectsView;
