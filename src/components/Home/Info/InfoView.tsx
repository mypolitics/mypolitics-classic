import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHistory,
  faVoteYea,
  faFistRaised,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';

import './Info.scss';
import InfoElement from './InfoElement';

library.add(faHistory, faVoteYea, faFistRaised, faCompass);

const Info: React.FC = () => (
  <section className="home__section home__info">
    <div className="home__info__container">
      <h1 className="home__info__title">Funkcje</h1>
      <div className="home__info__cards">
        <InfoElement value="+100" title="pytań w quizie" color="green" />
        <InfoElement value="3" title="kategorie pytań" color="violet" />
        <InfoElement icon={faHistory} title="historia wyników" color="blue" />
        <InfoElement
          icon={faFistRaised}
          title="najbliższa ideologia"
          color="red"
        />
        <InfoElement
          icon={faCompass}
          title="kompas polityczny"
          color="orange"
        />
        <InfoElement
          icon={faVoteYea}
          title="dopasowanie partii"
          color="turquoise"
        />
      </div>
    </div>
  </section>
);

export default Info;
