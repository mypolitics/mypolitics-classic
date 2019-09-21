import { Dispatch } from 'redux';
import { RootState } from 'store/';
import * as asyncactions from 'store/results/async-actions';
import { ResultsActions } from 'store/results/types';

export const mapStateToProps = ({ results }: RootState) => {
  const { loading } = results;
  return { loading };
};

export const mapDispatcherToProps = (dispatch: Dispatch<ResultsActions>) => ({
  addResultsById: (id: string) => asyncactions.addToResultsHistoryById(dispatch, id),
});
