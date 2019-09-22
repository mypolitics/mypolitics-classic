import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { v1 as uuid } from 'uuid';

import answers from 'utils/answersData';
import { Question } from 'store/quiz/types';
import Answer from './Answer';
import Effects from './Effects';

library.add(faArrowLeft, faUndo);

export type Props = {
  question: Question
  loading: boolean
  resetInitialized?: boolean
  previousQuestion?: Function
  clearAnswers?: Function
};

const ActionsView: React.FC<Props> = (props) => {
  const {
    question, loading, previousQuestion, clearAnswers, resetInitialized
  } = props;
  return (
    <div className="test__actions">
      <div className="test__answers">
        {answers.map((answer) => (
          <Answer
            key={uuid()}
            disable={loading}
            text={answer.text}
            color={answer.color}
            strength={answer.strength}
          />
        ))}
      </div>
      <div className="test__nav">
        <button
          className="test__nav__btn"
          type="button"
          disabled={question.index === 0}
          onClick={() => (previousQuestion ? previousQuestion() : null)}
        >
          <FaIcon icon={faArrowLeft} />
          Poprzednie pytanie
        </button>
        <button
          className="test__nav__btn test__nav__btn--red"
          type="button"
          disabled={question.index === 0}
          onClick={() => (clearAnswers ? clearAnswers() : null)}
        >
          {!resetInitialized && (
            <div>
              <FaIcon icon={faUndo} />
              Cofnij do początku
            </div>
          )}
          {resetInitialized && "Potwierdzam"}
        </button>
      </div>
      <Effects
        disable={loading}
        affirmativeAnswerEffects={question.affirmativeAnswerEffects}
        negativeAnswerEffects={question.negativeAnswerEffects}
      />
    </div>
  );
};

export default ActionsView;
