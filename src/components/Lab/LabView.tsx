import React from 'react';
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFlask, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, Title, Section, SectionTitle, SubTitle,
} from './LabStyle';
import LoadingInfo from '../LoadingInfo';

const CompassLab = React.lazy(() => import('./CompassLab'));
const ResultsLab = React.lazy(() => import('./ResultsLab'));

library.add(faFlask, faChevronDown, faChevronUp);

const LabView: React.FC = () => (
  <Container>
    <Helmet>
      <title>myPolitics – Lab</title>
      <meta property="og:title" content="myPolitics – Lab" />
      <meta property="og:image" content="/images/thumbnails/mypolitics.png" />
    </Helmet>
    <Title>
      Lab
      <FontAwesomeIcon icon="flask" />
    </Title>
    <Section>
      <SubTitle>
        Lab to środowisko testowe myPolitics, możesz tutaj przetestować główne funkcje testu.
        <br />
        Uwaga! Mogą wystąpić problemy z wydajnością.
      </SubTitle>
    </Section>
    <LabSection
      title="Kompas"
      content={<CompassLab />}
    />
    <LabSection
      title="Wyniki"
      content={<ResultsLab />}
    />
    <ins
      className="adsbygoogle"
      style={{
        display: 'block',
        width: '100%',
        marginTop: '1rem',
      }}
      data-ad-client="ca-pub-2006154132998057"
      data-ad-slot="3382249847"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </Container>
);

interface LabSectionProps {
  title: string;
  content: JSX.Element;
}

const LabSection: React.FC<LabSectionProps> = ({ title, content }) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleClick = () => (
    setVisible(!visible)
  );

  return (
    <Section>
      <SectionTitle>
        <span>{title}</span>
        <span onClick={handleClick}>
          {!visible && (
            <FontAwesomeIcon icon="chevron-down" />
          )}
          {visible && (
            <FontAwesomeIcon icon="chevron-up" />
          )}
        </span>
      </SectionTitle>
      <React.Suspense fallback={<LoadingInfo colorHEX="#111" />}>
        {visible && content}
      </React.Suspense>
    </Section>
  );
};

export default LabView;
