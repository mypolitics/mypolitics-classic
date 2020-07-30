import * as React from 'react';
import { Helmet } from 'react-helmet';

import LoadingInfo from 'components/LoadingInfo';
import { Results } from 'store/results/types';
import { SpheresCalculatorMethod, SpheresType } from 'utils/spheresCalculator';
import Axes from './Axes';
import Ideology from './Ideology';
import Compass from './Compass';
import Party from './Party';
import Actions from './Actions';
import YoutOrg from './YouthOrg';
import ModalAd from './ModalAd';

type Props = {
  loading: boolean
  results: Results
  spheresResults: SpheresType
  spheresCalcMethod: SpheresCalculatorMethod
  onSpheresCalcMethod(method: SpheresCalculatorMethod): void
};

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

const ResultsView: React.FC<Props> = (props) => {
  const {
    loading,
    results,
    spheresResults,
    spheresCalcMethod,
    onSpheresCalcMethod,
  } = props;

  const actions = (
    <Actions results={results} />
  );

  return (
    <main className="results">
      <Helmet>
        <title>myPolitics – Wyniki</title>
        <meta property="og:title" content="myPolitics – Wyniki" />
        <meta name="description" content="Sprawdź moje wyniki w teście politycznym myPolitics!" />
        <meta property="og:description" content="Sprawdź moje wyniki w teście politycznym myPolitics!" />
        <meta property="og:image" content="/images/thumbnails/mypolitics-results.png" />
      </Helmet>
      {!loading && spheresResults && (
        <div>
          <h1 className="results__title">
            Wyniki z
            {' '}
            {new Date(results.additionDate).toLocaleDateString(
              'pl-PL',
              dateOptions,
            )}
            {results.generated && (
              <span className="results__title-generated">Wygenerowane</span>
            )}
          </h1>

          <div className="results__inner">
            <div className="results__inner__column">
              <Axes results={results} />
              {actions}
            </div>
            <div className="results__inner__column">
              <Ideology spheresResults={spheresResults} />
              <Compass
                spheresResults={spheresResults}
                spheresCalcMethod={spheresCalcMethod}
                onSpheresCalcMethod={onSpheresCalcMethod}
              />
              <Party spheresResults={spheresResults} />
              <YoutOrg spheresResults={spheresResults} />
            </div>
            {actions}
          </div>
        </div>
      )}
      {loading && <LoadingInfo colorHEX="#111" />}
      <ModalAd
        results={results}
        loading={loading}
      />
    </main>
  );
};

export default ResultsView;
