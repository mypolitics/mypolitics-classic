/* eslint-disable import/prefer-default-export */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type QuizActions = ActionType<typeof actions>;

export enum Constants {
  ADD_ANSWER = 'ADD_ANSWER',
  INIT_ANSWERS = 'INIT_ANSWERS',
  SET_QUESTION = 'SET_QUESTION',
  SET_LOADING_VALUE = 'SET_LOADING_VALUE',
  SET_INTRO_VALUE = 'SET_INTRO_VALUE',
  CLEAR_QUIZ_DATA = 'CLEAR_QUIZ_DATA'
}

export interface QuizState {
  question: Question;
  answers: Answer[];
  loading: boolean;
  introDone: boolean;
}

export interface Question {
  totalCount: number;
  index: number;
  text: string;
  category: string;
  affirmativeAnswerEffects: string[];
  negativeAnswerEffects: string[];
}

export interface Answer {
  index: number;
  strength: number;
  effects: string[];
}
