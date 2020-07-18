import * as React from 'react';

import { Party as PartyType } from 'utils/partiesValues';
import {
  Container,
  Inner,
  Title,
  InfoContainer,
  Name,
  Links, ButtonGroup, Button,
} from './PartyStyle';

type Props = {
  party: PartyType | null,
  parliamentOnly: boolean;
  onParliamentOnlyChange(value: boolean): void;
  onPartyWebsiteButtonClick: Function,
  onPartyProgrammeButtonClick: Function
};

const Party: React.FC<Props> = (props) => {
  const {
    party,
    parliamentOnly,
    onParliamentOnlyChange,
    onPartyWebsiteButtonClick,
    onPartyProgrammeButtonClick,
  } = props;

  const title = (
    <Title>
      <span>
        Najbliższa partia
      </span>
      <ButtonGroup>
        <Button
          onClick={() => onParliamentOnlyChange(true)}
          selected={parliamentOnly}
        >
          w sejmie
        </Button>
        <Button
          onClick={() => onParliamentOnlyChange(false)}
          selected={!parliamentOnly}
        >
          wszystkie
        </Button>
      </ButtonGroup>
    </Title>
  );

  if (party) {
    return (
      <Container>
        <Inner>
          {title}
          <InfoContainer>
            <img alt={party.name} src={party.logo} />
            <Name>{party.name}</Name>
            <Links>
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
            </Links>
          </InfoContainer>
        </Inner>
      </Container>
    );
  }
  return (
    <Container>
      <Inner>
        {title}
        <InfoContainer notFound>
          <Name>
            Twoje wyniki nie pasują do żadnej polskiej partii
          </Name>
        </InfoContainer>
      </Inner>
    </Container>
  );
};

export default Party;
