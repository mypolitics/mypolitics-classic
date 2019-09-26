import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';

import './App.scss';
import Header from 'components/Header';
import Home from 'components/Home';
import Quiz from 'components/Quiz';
import ResultsHistory from 'components/ResultsHistory';
import Results from 'components/Results';
import Privacy from 'components/Privacy';
import Error404 from 'components/Error404';
import myPoliticsMainThumbnail from 'assets/images/thumbnails/mypolitics.png';
import { GA_TRACKING_ID } from 'config/index';

ReactGA.initialize(GA_TRACKING_ID);
ReactGA.pageview(window.location.href.split('/#/')[1] || '/');
library.add(faBars, faTimes);

const App: React.FC = () => (
  <div className="app">
    <Helmet>
      <title>myPolitics – Test poglądów politycznych</title>
      <meta property="og:title" content="myPolitics – Test poglądów politycznych" />
      <meta name="description" content="Test polityczny ukazujący twoje poglądy na siedmiu osiach." />
      <meta property="og:description" content="Test polityczny ukazujący twoje poglądy na siedmiu osiach." />
      <meta property="og:image" content={myPoliticsMainThumbnail} />
    </Helmet>
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results/:id" component={Results} />
        <Route path="/history" component={ResultsHistory} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/404" component={Error404} />
        <Route path="*" component={Error404} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
