import * as React from 'react';

import { Party as PartyType } from 'utils/partiesValues';

type Props = {
  party: PartyType | null,
  onPartyWebsiteButtonClick: Function,
  onPartyProgrammeButtonClick: Function
};

const Party: React.FC<Props> = (props) => {
  const {
    party,
    onPartyWebsiteButtonClick,
    onPartyProgrammeButtonClick,
  } = props;

  if (party) {
    return (
      <div className="party__container">
        <div className="party">
          <div className="party__title">
            Najbliższa partia
          </div>
          <div className="party__info">
            <img alt={party.name} src={party.logo}/>
            <span className="party__info__name">{party.name}</span>
            <div className="party__info__links">
              <a
                href={party.links.www}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onPartyWebsiteButtonClick()}
              >
                Strona WWW
              </a>
              <a
                href={party.links.programme}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onPartyProgrammeButtonClick()}
              >
                Program
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="party__container">
      <div className="party">
        <div className="party__title">
          Najbliższa partia
        </div>
        <div className="party__info notfound">
          <div className="party__name">
            Twoje wyniki nie pasują do żadnej polskiej partii
          </div>
        </div>
      </div>
    </div>
  );
};

export default Party;
