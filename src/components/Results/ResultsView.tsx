import * as React from 'react';
import { Helmet } from 'react-helmet';

import LoadingInfo from 'components/LoadingInfo';
import { Results } from 'store/results/types';
import myPoliticsResultsThumbnail from 'assets/images/thumbnails/mypolitics-results.png';
import Axes from './Axes';
import Ideology from './Ideology';
import Compass from './Compass';
import Party from './Party';
import Actions from './Actions';

type Props = {
  loading: boolean
  results: Results
};

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

const ResultsView: React.FC<Props> = (props) => {
  const { loading, results } = props;
  return (
    <main className="results">
      <Helmet>
        <title>myPolitics – Wyniki</title>
        <meta property="og:title" content="myPolitics – Wyniki" />
        <meta name="description" content="Sprawdź moje wyniki w teście politycznym myPolitics!" />
        <meta property="og:description" content="Sprawdź moje wyniki w teście politycznym myPolitics!" />
        <meta property="og:image" content={myPoliticsResultsThumbnail} />
      </Helmet>
      {!loading && results && (
        <div>
          <h1 className="results__title">
            Wyniki z
            {' '}
            {new Date(results.additionDate).toLocaleDateString(
              'pl-PL',
              dateOptions,
            )}
          </h1>

          <div className="results__inner">
            <div className="results__inner__column">
              <Axes results={results} />
            </div>
            <div className="results__inner__column">
              <Ideology results={results} />
              <Compass results={results} />
              <Party results={results} />
            </div>
          </div>
          <Actions />
        </div>
      )}
      {loading && <LoadingInfo colorHEX="#111" />}
    </main>
  );
};

export default ResultsView;
