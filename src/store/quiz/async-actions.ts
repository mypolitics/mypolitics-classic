/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import * as actions from './actions';
import { QuizActions } from './types';

import service from '../../service';

export async function getAndSetQuestionByIndex(
  dispatch: Dispatch<QuizActions>,
  questionIndex: number,
) {
  dispatch(actions.setLoadingValue(true));

  await service
    .getQuestionByIndex(questionIndex)
    .then((question) => dispatch(actions.setQuestion(question)))
    .catch(console.error);

  if (questionIndex === 0) {
    dispatch(actions.initAnswers());
  }

  dispatch(actions.setLoadingValue(false));
}
