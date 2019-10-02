import * as React from 'react';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

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

    this.onPartyWebsiteButtonClick = this.onPartyWebsiteButtonClick.bind(this);
    this.onPartyProgrammeButtonClick = this.onPartyProgrammeButtonClick.bind(this);
  }

  onPartyWebsiteButtonClick() {
    const { party } = this.state

    ReactGA.event({
      category: 'Party',
      action: 'Website Link Clicked',
      label: party ? party.name : 'NOT_FOUND'
    });

    ReactPixel.trackCustom('PartyWebsiteLinkClicked', {
      party: party ? party.name : 'NOT_FOUND'
    });
  }

  onPartyProgrammeButtonClick() {
    const { party } = this.state

    ReactGA.event({
      category: 'Party',
      action: 'Programme Link Clicked',
      label: party ? party.name : 'NOT_FOUND'
    });

    ReactPixel.trackCustom('PartyProgrammeLinkClicked', {
      party: party ? party.name : 'NOT_FOUND'
    });
  }

  render = () => PartyView({
    party: this.state.party,
    onPartyWebsiteButtonClick: this.onPartyWebsiteButtonClick,
    onPartyProgrammeButtonClick: this.onPartyProgrammeButtonClick,
  })
}

export default Party;
