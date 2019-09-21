import { RootState } from 'store';
import { Dispatch } from 'redux';
import * as actions from 'store/results/actions';
import { ResultsActions } from 'store/results/types';

export const mapStateToProps = ({ results }: RootState) => {
  const { resultsHistory, loading } = results;
  return { resultsHistory, loading };
};

export const mapDispatcherToProps = (dispatch: Dispatch<ResultsActions>) => ({
  deleteResultsHistoryElement: (id: string) => dispatch(actions.deleteResultsHistoryElement(id)),
});
