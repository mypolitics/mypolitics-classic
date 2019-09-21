import { Dispatch } from 'redux';

import * as actions from 'store/quiz/actions';
import * as asyncactions from 'store/quiz/async-actions';
import { QuizActions } from 'store/quiz/types';

export const mapDispatcherToProps = (dispatch: Dispatch<QuizActions>) => ({
  setIntroValue: (value: boolean) => dispatch(actions.setIntroValue(value)),
  getAndSetFirstQuestion: () => asyncactions.getAndSetQuestionByIndex(dispatch, 0),
});

export default mapDispatcherToProps;
