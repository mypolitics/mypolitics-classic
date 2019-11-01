import { RootState } from 'store';
import { Dispatch } from 'redux';

import * as asyncactions from 'store/quiz/async-actions';
import { QuizActions } from 'store/quiz/types';

export const mapStateToProps = ({ quiz }: RootState) => {
  const { question, loading } = quiz;
  return { question, loading };
};

export const mapDispatcherToProps = (dispatch: Dispatch<QuizActions>) => ({
  getAndSetFirstQuestion: () => asyncactions.getAndSetQuestionByIndex(dispatch, 0),
});
