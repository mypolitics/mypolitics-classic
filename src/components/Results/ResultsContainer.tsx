import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import './Results.scss';
import calcSpheresResults, { SpheresCalculatorMethod, SpheresType } from 'utils/spheresCalculator';
import { Results as ResultsType } from 'store/results/types';
import { mapDispatcherToProps, mapStateToProps } from './ResultsRedux';
import ResultsView from './ResultsView';

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;
type MatchProps = RouteComponentProps<{ id: string }>;
type Props = ReduxType & MatchProps;

type State = {
  results: any
  spheresResults: any
};

const Results: React.FC<Props> = ({
  match,
  resultsHistory,
  getAndSetResultsById,
  resultsData,
  history,
  loading,
}) => {
  const [results, setResults] = React.useState<ResultsType>();
  const [spheresResults, setSpheresResults] = React.useState<SpheresType>();
  const [spheresCalcMethod, setSpheresCalcMethod] = React.useState<SpheresCalculatorMethod>(
    SpheresCalculatorMethod.Old,
  );

  const getResultsFromStore = (id: string): ResultsType | undefined => (
    resultsHistory.find((r) => r.id === id)
  );

  const getResultsFromDatabase = async (id: string): Promise<ResultsType | undefined> => {
    await getAndSetResultsById(id);

    if (resultsData.id !== id) {
      history.push('/404');
    }

    console.log(resultsData)

    return resultsData;
  };

  const onComponentUpdate = async () => {
    const { id } = match.params;
    const resultsSavedInStore = resultsHistory.some((el) => el.id === id);

    const gettedResults = resultsSavedInStore
      ? await getResultsFromStore(id)
      : await getResultsFromDatabase(id);

    if (!gettedResults) {
      history.push('/404');
      return;
    }

    const calculatedSpheresResults = calcSpheresResults(
      gettedResults,
      spheresCalcMethod,
    );

    setResults(gettedResults);
    setSpheresResults(calculatedSpheresResults);

    ReactGA.event({
      category: 'Results',
      action: 'Opened',
      label: id,
    });

    ReactPixel.trackCustom('ResultsOpen', {
      id,
    });
  };

  const handleSpheresCalcMethod = (method: SpheresCalculatorMethod) => {
    if (results) {
      const calculatedSpheresResults = calcSpheresResults(
        results,
        method,
      );

      setSpheresCalcMethod(method);
      setSpheresResults(calculatedSpheresResults);
    }
  };

  React.useEffect(() => {
    onComponentUpdate();
  }, [match.params.id]);

  if (!results || !spheresResults) {
    return null;
  }

  return (
    <ResultsView
      loading={loading}
      results={results}
      spheresResults={spheresResults}
      spheresCalcMethod={spheresCalcMethod}
      onSpheresCalcMethod={handleSpheresCalcMethod}
    />
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatcherToProps)(Results),
);
