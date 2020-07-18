import * as React from 'react';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import { SpheresType } from 'utils/spheresCalculator';
import { findParty } from 'utils/partyFinder';
import PartyView from './PartyView';

type Props = {
  spheresResults: SpheresType
};

const Party: React.FC<Props> = ({ spheresResults }) => {
  const [parliamentOnly, setParliamentOnly] = React.useState<boolean>(true);
  const party = findParty({
    economics: spheresResults.economics,
    social: spheresResults.social,
  }, parliamentOnly);

  const handlePartyWebsiteButtonClick = () => {
    ReactGA.event({
      category: 'Party',
      action: 'Website Link Clicked',
      label: party ? party.name : 'NOT_FOUND',
    });

    ReactPixel.trackCustom('PartyWebsiteLinkClicked', {
      party: party ? party.name : 'NOT_FOUND',
    });
  };

  const handlePartyProgrammeButtonClick = () => {
    ReactGA.event({
      category: 'Party',
      action: 'Programme Link Clicked',
      label: party ? party.name : 'NOT_FOUND',
    });

    ReactPixel.trackCustom('PartyProgrammeLinkClicked', {
      party: party ? party.name : 'NOT_FOUND',
    });
  };

  return (
    <PartyView
      party={party}
      parliamentOnly={parliamentOnly}
      onParliamentOnlyChange={setParliamentOnly}
      onPartyProgrammeButtonClick={handlePartyProgrammeButtonClick}
      onPartyWebsiteButtonClick={handlePartyWebsiteButtonClick}
    />
  );
};

export default Party;
