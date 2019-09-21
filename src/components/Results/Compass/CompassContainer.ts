import React from 'react';

import './Compass.scss';
import { SpheresType, calcSpheresResults } from 'utils/spheresCalculator';
import { Results } from 'store/results/types';
import CompassView from './CompassView';

type Props = {
  results: Results
};

type State = SpheresType;

class Compass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      economics: 0,
      social: 0,
    };
  }

  async componentDidMount() {
    const { results } = this.props;
    const spheresResults = await calcSpheresResults(results);

    this.setState({
      economics: spheresResults.economics,
      social: spheresResults.social,
    });
  }

  render = () => CompassView({
    economics: this.state.economics,
    social: this.state.social,
  })
}

export default Compass;
