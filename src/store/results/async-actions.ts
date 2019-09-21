/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import * as actions from './actions';
import { ResultsActions, Results } from './types';

import service from '../../service';

export async function getAndSetResultsById(
  dispatch: Dispatch<ResultsActions>,
  resultsId: string,
) {
  dispatch(actions.setLoadingValue(true));

  await service
    .getResultsById(resultsId)
    .then((response) => response.singleResultsById)
    .then((results) => {
      if (results) {
        dispatch(actions.setResults(results));
      } else {
        throw new Error('Results not found');
      }
    })
    .catch(console.error);

  dispatch(actions.setLoadingValue(false));
}

export async function addToResultsHistoryById(
  dispatch: Dispatch<ResultsActions>,
  resultsId: string,
) {
  dispatch(actions.setLoadingValue(true));

  await service
    .getResultsById(resultsId)
    .then((response) => response.singleResultsById)
    .then((results) => {
      if (results) {
        dispatch(actions.addToResultsHistory(results));
      } else {
        throw new Error('Results not found');
      }
    })
    .catch(console.error);

  dispatch(actions.setLoadingValue(false));
}

export function addAndSetResults(
  dispatch: Dispatch<ResultsActions>,
  results: Results,
) {
  dispatch(actions.setLoadingValue(true));

  return service
    .addResults(results)
    .then((response) => response.addResults)
    .then((addResults) => addResults.id)
    .catch(console.error)
    .finally(() => dispatch(actions.setLoadingValue(false)));
}
