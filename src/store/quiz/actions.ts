/* eslint-disable import/prefer-default-export */
import { action } from 'typesafe-actions';
import { Constants, Question, Answer } from './types';

export function setQuestion(question: Question) {
  return action(Constants.SET_QUESTION, {
    question,
  });
}

export function addAnswer(answer: Answer) {
  return action(Constants.ADD_ANSWER, {
    answer,
  });
}

export function initAnswers() {
  return action(Constants.INIT_ANSWERS);
}

export function setLoadingValue(value: boolean) {
  return action(Constants.SET_LOADING_VALUE, {
    value,
  });
}

export function setIntroValue(value: boolean) {
  return action(Constants.SET_INTRO_VALUE, {
    value,
  });
}

export function clearQuizData() {
  return action(Constants.CLEAR_QUIZ_DATA);
}
