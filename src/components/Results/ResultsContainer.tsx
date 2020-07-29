import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import './Results.scss';
import calcSpheresResults, { SpheresCalculatorMethod } from 'utils/spheresCalculator';
import { mapDispatcherToProps, mapStateToProps } from './ResultsRedux';
import LoadingInfo from '../LoadingInfo';
import ResultsView from './ResultsView';

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;
type MatchProps = RouteComponentProps<{ id: string }>;
type Props = ReduxType & MatchProps;

const Results: React.FC<Props> = ({
  match,
  resultsData,
  getAndSetResultsById,
  history,
}) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [spheresCalcMethod, setSpheresCalcMethod] = React.useState<SpheresCalculatorMethod>(
    SpheresCalculatorMethod.New,
  );
  const getCalculatedSpheresResults = React.useCallback(() => calcSpheresResults(
    resultsData,
    spheresCalcMethod,
  ), [resultsData, spheresCalcMethod]);
  const spheresResults = getCalculatedSpheresResults();

  const handleSpheresCalcMethod = (method: SpheresCalculatorMethod) => (
    setSpheresCalcMethod(method)
  );

  const onComponentUpdate = async () => {
    setLoading(true);
    const { id } = match.params;

    const result = await getAndSetResultsById(id);
    if (!result) {
      history.push('/404');
    }

    ReactGA.event({
      category: 'Results',
      action: 'Opened',
      label: id,
    });

    ReactPixel.trackCustom('ResultsOpen', {
      id,
    });

    setLoading(false);
  };

  React.useEffect(() => {
    onComponentUpdate();
  }, [match.params.id]);

  if (!resultsData || !spheresResults) {
    return (
      <LoadingInfo colorHEX="#111" />
    );
  }

  return (
    <ResultsView
      loading={loading}
      results={resultsData}
      spheresResults={spheresResults}
      spheresCalcMethod={spheresCalcMethod}
      onSpheresCalcMethod={handleSpheresCalcMethod}
    />
  );
};


export default withRouter(
  connect(mapStateToProps, mapDispatcherToProps)(Results),
);
