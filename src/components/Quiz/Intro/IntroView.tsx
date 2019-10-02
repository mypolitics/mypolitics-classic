import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import './Intro.scss';
import { mapDispatcherToProps } from './IntroRedux';

type ReduxType = ReturnType<typeof mapDispatcherToProps>;
type Props = ReduxType;

const IntroView: React.FC<Props> = (props) => {
  const { setIntroValue, getAndSetFirstQuestion } = props;

  const completeIntro = () => {
    ReactGA.event({
      category: 'Quiz',
      action: 'Initialized',
    });
    ReactPixel.trackCustom('QuizInitialize', {});

    setIntroValue(true);
    getAndSetFirstQuestion();
  };

  return (
    <div className="intro">
      <h1 className="intro__title">Wstęp</h1>
      <div className="intro__info">
        {' Mamy dla Ciebie '}
        <span>trzy</span>
        {' ważne informacje:'}
        <ol>
          <li>
            {'Wykonanie quizu nie zajmie Ci więcej niż '}
            <b>9 minut</b>
.
          </li>
          <li>
            <b>Odpowiedzi są automatycznie zapisywane</b>
. Możesz wyjść z
            quizu w każdej chwili i wrócić kiedy będziesz miał/miała czas.
          </li>
          <li>
            Rozpoczynając test akceptujesz naszą
            {' '}
            <Link to="/privacy" target="_blank">politykę prywatności</Link>
          </li>
        </ol>
      </div>
      <button className="intro__btn" type="button" onClick={completeIntro}>
        Dalej
      </button>
    </div>
  );
};

export default connect(
  null,
  mapDispatcherToProps,
)(IntroView);
