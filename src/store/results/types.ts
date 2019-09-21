/* eslint-disable import/prefer-default-export */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ResultsActions = ActionType<typeof actions>;

export enum Constants {
  SET_RESULTS_HISTORY = 'SET_RESULTS_HISTORY',
  SET_RESULTS = 'SET_RESULTS',
  SET_LOADING_VALUE = 'SET_LOADING_VALUE',
  ADD_TO_RESULTS_HISTORY = 'ADD_TO_RESULTS_HISTORY',
  DELETE_RESULTS_HISTORY_ELEMENT = 'DELETE_RESULTS_HISTORY_ELEMENT'
}

export interface ResultsState {
  resultsHistory: Results[];
  results: Results;
  loading: boolean;
}

export interface Results {
  id?: string;
  axes: AxesResults;
  additionDate: string;
}

export interface AxesResults {
  [key: string]: any;
}
