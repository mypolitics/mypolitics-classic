import * as React from 'react';

import { Party as PartyType } from 'utils/partiesValues';
import {
  Container,
  Inner,
  Title,
  InfoContainer,
  Name,
  Links,
  ButtonGroup,
  Button,
  Actions,
  ListParty,
  ListPartyImage,
  ListPartyTitle,
  ListPartyValue,
} from './PartyStyle';
import { PartyDistance } from '../../../utils/partyFinder';

type Props = {
  party: PartyType | null,
  partiesDistances: PartyDistance[];
  parliamentOnly: boolean;
  onParliamentOnlyChange(value: boolean): void;
  asList: boolean;
  onAsListChange(value: boolean): void;
  onPartyWebsiteButtonClick: Function,
  onPartyProgrammeButtonClick: Function
};

const Party: React.FC<Props> = ({
  party,
  parliamentOnly,
  partiesDistances,
  onParliamentOnlyChange,
  asList,
  onAsListChange,
  onPartyWebsiteButtonClick,
  onPartyProgrammeButtonClick,
}) => {
  const title = (
    <Title>
      <span>
        Najbliższa partia
      </span>
      <Actions>
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
        <Button
          onClick={() => onAsListChange(!asList)}
          selected={asList}
          alone
        >
          lista
        </Button>
      </Actions>
    </Title>
  );

  if (asList) {
    return (
      <Container>
        <Inner>
          {title}
          <InfoContainer list>
            {console.log(partiesDistances)}
            {partiesDistances.map(({ party: listParty, distance }) => {
              const value = ((2 * Math.sqrt(2) - distance) / (2 * Math.sqrt(2))) * 100;
              return (
                <ListParty>
                  <ListPartyImage
                    src={listParty.logo}
                    alt={listParty.name}
                  />
                  <ListPartyTitle>
                    {listParty.name}
                  </ListPartyTitle>
                  <ListPartyValue value={value}>
                    {value.toFixed(0)}%
                  </ListPartyValue>
                </ListParty>
              )
            })}
          </InfoContainer>
        </Inner>
      </Container>
    )
  }

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
            Twoje wyniki nie pasują do żadnej partii wybranej kategorii
          </Name>
        </InfoContainer>
      </Inner>
    </Container>
  );
};

export default Party;
