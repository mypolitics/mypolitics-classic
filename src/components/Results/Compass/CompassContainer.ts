import React from 'react';

import './Compass.scss';
import { SpheresType } from 'utils/spheresCalculator';
import CompassView from './CompassView';

type Props = {
  spheresResults: SpheresType
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
    const { spheresResults } = this.props;

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
