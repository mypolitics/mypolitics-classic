import * as React from 'react';
import { Helmet } from 'react-helmet';

import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import LoadingInfo from 'components/LoadingInfo';
import { Results } from 'store/results/types';
import { SpheresType, SpheresVariant } from 'utils/spheresCalculator';
import Axes from './Axes';
import Ideology from './Ideology';
import Compass from './Compass';
import Party from './Party';
import Actions from './Actions';
import YoutOrg from './YouthOrg';
import ModalAd from './ModalAd';
import Rate from './Rate';
import PolitykawkaAdView from './PolitykawkaAd';
import { politicansResults } from '../../utils/politicansResults';
import PoliticiansResultsList from '../PoliticiansResultsList/PoliticiansResultsListView';

library.add(faThumbsDown, faThumbsUp);

type Props = {
  loading: boolean
  results: Results
  spheresResults: SpheresType
  spheresCalcMethod: SpheresVariant
  onSpheresCalcMethod(method: SpheresVariant): void
};

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

const ResultsView: React.FC<Props> = ({
  loading,
  results,
  spheresResults,
  spheresCalcMethod,
  onSpheresCalcMethod,
}) => {
  const isPolitician = !loading && results.id && politicansResults.map((r) => r.id).includes(results.id);
  const politician = isPolitician ? politicansResults.find((r) => r.id === results.id) : false;
  const isClassic = spheresCalcMethod === SpheresVariant.Classic;
  const canRate = results.id && localStorage.getItem('last-id') === results.id;

  React.useEffect(() => {
    if (!loading) {
      try {
        document.querySelectorAll('.adsbygoogle').forEach(() => {
          // @ts-ignore
          // eslint-disable-next-line no-undef
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        });
      } catch (e) {
        console.error(e);
      }
      (window as any).scrollTo && window.scrollTo(0, 0);
    }
  }, [loading]);

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
      {!loading && (
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            width: '100%',
            marginBottom: '2rem',
          }}
          data-ad-client="ca-pub-2006154132998057"
          data-ad-slot="6938351477"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
      {!loading && spheresResults && (
        <div>
          <div className={`results__header ${canRate ? 'with-rate' : ''}`}>
            <h1 className="results__title">
              {!isPolitician && (
                <>
                  Wyniki z
                  {' '}
                  {new Date(results.additionDate).toLocaleDateString(
                    'pl-PL',
                    dateOptions,
                  )}
                  {results.generated && (
                    <span className="results__title-generated">Wygenerowane</span>
                  )}
                </>
              )}
              {politician && (
                politician.person.name
              )}
            </h1>
            {canRate && <Rate results={results} />}
          </div>

          {politician && (
            <div className="results__politician">
              <img
                className="results__politician__image"
                src={`/images/politicians/${politician.person.imgName}`}
                alt={politician.person.name}
              />
              <div className="results__politician__description">
                {politician.person.description}
              </div>
            </div>
          )}

          <div className="results__inner">
            <div className="results__inner__column">
              <Axes results={results} />
              {actions}
            </div>
            <div className={`results__inner__column ${isClassic ? 'classic' : ''}`}>
              <Ideology spheresResults={spheresResults} />
              <Compass
                results={results}
                spheresResults={spheresResults}
                spheresCalcMethod={spheresCalcMethod}
                onSpheresCalcMethod={onSpheresCalcMethod}
              />
              {!isClassic && (
                <>
                  <Party spheresResults={spheresResults} />
                  <YoutOrg spheresResults={spheresResults} />
                </>
              )}
              {isClassic && (
                <div className="results__info">
                  Informacje dodatkowe nie są dostępne w&nbsp;trybie klasycznym
                </div>
              )}
            </div>
            {actions}
          </div>
        </div>
      )}
      {loading && <LoadingInfo colorHEX="var(--black-1)" />}
      <ModalAd
        results={results}
        loading={loading}
      />
      {!loading && spheresResults && (
        <PolitykawkaAdView spheresResults={spheresResults} />
      )}
      {!loading && (
        <>
          <ins
            className="adsbygoogle"
            style={{
              display: 'block',
              width: '100%',
              marginTop: '1rem',
            }}
            data-ad-client="ca-pub-2006154132998057"
            data-ad-slot="2610433460"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <div className="results__politicians-results">
            <h1>
              Sprawdź wyniki polityków!
            </h1>
            <PoliticiansResultsList />
          </div>
        </>
      )}
    </main>
  );
};

export default ResultsView;
