import * as React from 'react';

import './Party.scss';
import { SpheresType } from 'utils/spheresCalculator';
import { findParty } from 'utils/partyFinder';
import { Party as PartyType } from 'utils/partiesValues';
import PartyView from './PartyView';

type Props = {
  spheresResults: SpheresType
};

type State = {
  party: PartyType | null
};

class Party extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      party: null,
    };
  }

  componentDidMount() {
    const { spheresResults } = this.props;
    const party = findParty({
      economics: spheresResults.economics,
      social: spheresResults.social,
    });

    this.setState({
      party,
    });
  }

  render = () => PartyView({
    party: this.state.party,
  })
}

export default Party;
