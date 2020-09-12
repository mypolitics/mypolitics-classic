import * as React from 'react';
import StatsElement from './StatsElement';
import './Stats.scss';

const Stats: React.FC = () => (
  <section className="home__section home__stats">
    <div className="home__stats__container">
      <h1 className="home__stats__title">Statystyki</h1>
      <div className="home__stats__list">
        <StatsElement value="562 537" info="sesji na stronie" />
        <StatsElement value="351 235" info="wykonanych testów" />
        <StatsElement value="100%" info="otwarty kod" />
      </div>
    </div>
  </section>
);

export default Stats;
