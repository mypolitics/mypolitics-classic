import * as React from 'react';

import './Team.scss';
import { teams } from './TeamUtils';

const TeamView: React.FC = () => (
  <main className="team">
    <h1 className="team__title">Zespół</h1>
    <div className="team__list">
      <div className="team__list__element">
        Adrian Orłów
        &nbsp;
        <span>Autor</span>
      </div>
      {teams.map(({ name, people }) => {
        const peopleShuffled = people.sort(() => 0.5 - Math.random());
        return (
          <>
            <div key={name} className="team__list__title">
              {name}
            </div>
            {peopleShuffled.map((person) => (
              <div key={person} className="team__list__element">
                {person}
              </div>
            ))}
          </>
        );
      })}
    </div>
  </main>
);

export default TeamView;
