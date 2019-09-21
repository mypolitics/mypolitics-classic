import { Dispatch } from 'redux';

import * as quizActions from 'store/quiz/actions';
import * as asyncactions from 'store/quiz/async-actions';
import { QuizActions } from 'store/quiz/types';

export const mapDispatcherToProps = (dispatch: Dispatch<QuizActions>) => ({
  getAndSetQuestionByIndex: (questionIndex: number) => {
    asyncactions.getAndSetQuestionByIndex(dispatch, questionIndex);
  },
  clearQuizData: () => dispatch(quizActions.clearQuizData()),
});

export default mapDispatcherToProps;
