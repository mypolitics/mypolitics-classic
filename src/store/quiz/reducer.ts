/* eslint-disable import/prefer-default-export */
import { Constants, QuizActions, QuizState } from './types';

const initialState: QuizState = {
  question: {
    totalCount: 0,
    index: 0,
    text: '',
    category: '',
    affirmativeAnswerEffects: [],
    negativeAnswerEffects: [],
  },
  answers: [],
  loading: true,
  introDone: false,
};

export function quizReducer(
  state: QuizState = initialState,
  action: QuizActions,
): QuizState {
  switch (action.type) {
    case Constants.SET_QUESTION: {
      return {
        ...state,
        question: action.payload.question,
      };
    }
    case Constants.INIT_ANSWERS: {
      const questionsTotalCount = state.question.totalCount;
      return {
        ...state,
        answers: new Array(questionsTotalCount),
      };
    }
    case Constants.ADD_ANSWER: {
      const answerIndex = action.payload.answer.index;
      const { answer } = action.payload;
      return {
        ...state,
        answers: Object.assign([...state.answers], { [answerIndex]: answer }),
      };
    }
    case Constants.SET_INTRO_VALUE:
      return { ...state, introDone: action.payload.value };
    case Constants.SET_LOADING_VALUE:
      return { ...state, loading: action.payload.value };
    case Constants.CLEAR_QUIZ_DATA:
      return initialState;
    default:
      return state;
  }
}
