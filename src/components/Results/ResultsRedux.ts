import { Dispatch } from 'redux';
import * as asyncactions from 'store/results/async-actions';
import { RootState } from 'store';
import { Results, ResultsActions } from 'store/results/types';

export const mapStateToProps = ({ results }: RootState) => {
  const { results: resultsData, resultsHistory, loading } = results;
  return { resultsData, resultsHistory, loading };
};

export const mapDispatcherToProps = (dispatch: Dispatch<ResultsActions>) => ({
  getAndSetResultsById: async (resultsId: string): Promise<Results | undefined> => (
    asyncactions.getAndSetResultsById(dispatch, resultsId)
  ),
});
