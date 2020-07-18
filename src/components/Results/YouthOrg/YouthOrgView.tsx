import * as React from 'react';

import { YouthOrg as YouthOrgType } from 'utils/youthOrgsValues';
import {
  Container,
  Inner,
  Title,
  InfoContainer,
  Image,
  Name,
} from './YouthOrgStyle';

type Props = {
  youthOrg: YouthOrgType | null,
  onLinkButtonClick(): void;
};

const YouthOrg: React.FC<Props> = ({ youthOrg, onLinkButtonClick }) => {
  if (youthOrg) {
    return (
      <Container>
        <Inner>
          <Title>
            Najbliższa młodzieżówka
          </Title>
          <InfoContainer
            href={youthOrg.link}
            target="_blank"
            onClick={onLinkButtonClick}
          >
            <Image src={youthOrg.logo} alt={youthOrg.name} />
            <Name style={{ background: youthOrg.color }}>
              {youthOrg.name}
            </Name>
          </InfoContainer>
        </Inner>
      </Container>
    );
  }

  return (
    <Container>
      <Inner>
        <Title>
          Najbliższa młodzieżówka
        </Title>
        <InfoContainer notFound as="div">
          Brak
        </InfoContainer>
      </Inner>
    </Container>
  );
};

export default YouthOrg;
