import * as React from 'react';
import { connect } from 'react-redux';

import './Intro.scss';
import { mapDispatcherToProps } from './IntroRedux';

type ReduxType = ReturnType<typeof mapDispatcherToProps>;
type Props = ReduxType;

const IntroView: React.FC<Props> = (props) => {
  const { setIntroValue, getAndSetFirstQuestion } = props;

  const completeIntro = () => {
    setIntroValue(true);
    getAndSetFirstQuestion();
  };

  return (
    <div className="intro">
      <h1 className="intro__title">Wstęp</h1>
      <div className="intro__info">
        Mamy dla Ciebie
        {' '}
        <span>dwie</span>
        {' '}
        ważne informacje:
        <ol>
          <li>
            Wykonanie quizu nie zajmie Ci więcej niż
            {' '}
            <b>9 minut</b>
.
          </li>
          <li>
            <b>Odpowiedzi są automatycznie zapisywane</b>
. Możesz wyjść z
            quizu w każdej chwili i wrócić kiedy będziesz miał/miała czas.
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
