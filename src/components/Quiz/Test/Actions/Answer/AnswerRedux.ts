import { Dispatch } from 'redux';
import { RootState } from 'store';
import * as quizActions from 'store/quiz/actions';
import * as quizAsyncactions from 'store/quiz/async-actions';
import * as resultsAsyncactions from 'store/results/async-actions';
import { QuizActions, Answer } from 'store/quiz/types';
import { ResultsActions, Results } from 'store/results/types';

export const mapStateToProps = ({ quiz }: RootState) => {
  const { question, answers } = quiz;
  return { question, answers };
};

type MultipleDispatch = Dispatch<QuizActions> & Dispatch<ResultsActions>;

export const mapDispatcherToProps = (dispatch: MultipleDispatch) => ({
  getAndSetQuestionByIndex: async (questionIndex: number) => {
    await quizAsyncactions.getAndSetQuestionByIndex(dispatch, questionIndex);
  },
  addAndSetResults: (results: Results) => {
    return resultsAsyncactions.addAndSetResults(dispatch, results)
  },
  addToResultsHistoryById: async (id: string) => {
    await resultsAsyncactions.addToResultsHistoryById(dispatch, id);
  },
  addAnswer: (answer: Answer) => dispatch(quizActions.addAnswer(answer)),
  clearQuizData: () => dispatch(quizActions.clearQuizData()),
});
