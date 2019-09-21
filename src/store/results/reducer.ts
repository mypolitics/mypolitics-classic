/* eslint-disable import/prefer-default-export */
import { Constants, ResultsActions, ResultsState } from './types';

const initialState: ResultsState = {
  resultsHistory: [],
  results: {
    axes: {
      anarchism: 0,
      anthropocentrism: 0,
      authoritarianism: 0,
      capitalism: 0,
      communism: 0,
      cosmopolitanism: 0,
      environmentalism: 0,
      interventionism: 0,
      laissezfaire: 0,
      militarism: 0,
      nationalism: 0,
      pacifism: 0,
      progressivism: 0,
      traditionalism: 0,
    },
    additionDate: '1970-01-01T00:00:00.000Z',
  },
  loading: false,
};

export function resultsReducer(
  state: ResultsState = initialState,
  action: ResultsActions,
): ResultsState {
  switch (action.type) {
    case Constants.SET_RESULTS: {
      return {
        ...state,
        results: action.payload.results,
      };
    }
    case Constants.SET_RESULTS_HISTORY: {
      return {
        ...state,
        resultsHistory: action.payload.resultsHistory,
      };
    }
    case Constants.ADD_TO_RESULTS_HISTORY: {
      return {
        ...state,
        resultsHistory: [...state.resultsHistory, action.payload.results],
      };
    }
    case Constants.DELETE_RESULTS_HISTORY_ELEMENT: {
      return {
        ...state,
        resultsHistory: state.resultsHistory.filter(
          (el) => el.id !== action.payload.id,
        ),
      };
    }
    case Constants.SET_LOADING_VALUE: {
      return {
        ...state,
        loading: action.payload.value,
      };
    }
    default:
      return state;
  }
}
