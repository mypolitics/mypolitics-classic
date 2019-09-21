/* eslint-disable import/prefer-default-export */
import { action } from 'typesafe-actions';
import { Constants, Results } from './types';

export function setResults(results: Results) {
  return action(Constants.SET_RESULTS, {
    results,
  });
}

export function addToResultsHistory(results: Results) {
  return action(Constants.ADD_TO_RESULTS_HISTORY, {
    results,
  });
}

export function setResultsHistory(resultsHistory: Results[]) {
  return action(Constants.SET_RESULTS_HISTORY, {
    resultsHistory,
  });
}

export function deleteResultsHistoryElement(id: string) {
  return action(Constants.DELETE_RESULTS_HISTORY_ELEMENT, {
    id,
  });
}

export function setLoadingValue(value: boolean) {
  return action(Constants.SET_LOADING_VALUE, {
    value,
  });
}
