import * as React from 'react';

import './Ideologies.scss';
import axesConfig from 'utils/axesConfig';
import IdeologiesElement from './IdeologiesElement';

const IdeologiesView: React.FC = () => (
  <section className="home__section home__ideologies" id="ideologies">
    <div className="home__ideologies__container">
      <h1 className="home__ideologies__title">Ideologie</h1>
      <div className="home__ideologies__list">
        {axesConfig.map((axis) => (
          <IdeologiesElement key={axis.index} axis={axis} />
        ))}
      </div>
    </div>
  </section>
);

export default IdeologiesView;
