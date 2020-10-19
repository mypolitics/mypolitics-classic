import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { Results } from 'store/results/types';
import {
  MainButton,
  BottomContainer,
  Container,
  Link,
  MiddleContainer,
  MiddleList,
  MiddleListElement,
  MiddleTitle,
  TopButton,
  TopContainer,
  TopTitle,
  Wrapper, ButtonsContainer, MainButtonLink,
} from './ModalAdStyle';
import { getShowValue, setShowValue } from './ModalAdUtilts';

library.add(faTimes, faFacebookF, faDiscord);

interface Props {
  results: Results
  loading: boolean
}

const defaultShow = getShowValue();

const ModalAd: React.FC<Props> = ({ results, loading }: Props) => {
  const [show, setShow] = React.useState<boolean>(false);

  const handleCloseClick = () => {
    const currentTime = new Date().getTime();
    setShowValue(currentTime);
    setShow(false);
  };

  const handleActionClick = (type: 'Join' | 'Facebook' | 'Discord' | 'Open') => {
    const resultsId = results ? results.id : 'LOADING';

    ReactGA.event({
      category: 'M4PAD',
      action: `${type} Button Clicked`,
      label: resultsId,
    });

    ReactPixel.trackCustom(`M4PAD${type}ButtonClick`, {
      id: resultsId,
    });
  };

  const handleOpenClick = () => {
    handleActionClick('Open');
    setShow(true);
  };

  return (
    <>
      {!loading && (
        <ButtonsContainer>
          <MainButtonLink
            as="a"
            target="_blank"
            href="https://l.orlow.me/sztabmypolitics"
          >
            Kliknij i dołącz na naszą grupę!
          </MainButtonLink>
          <MainButton onClick={handleOpenClick}>
            <span>Polityczny serwer Minecraft.</span>
            &nbsp;Brzmi fajnie? Kliknij i dowiedz się więcej!
          </MainButton>
        </ButtonsContainer>
      )}
      <Wrapper show={show}>
        <Container>
          <TopContainer>
            <TopTitle>
              Polityczny serwer Minecraft
            </TopTitle>
            <TopButton onClick={handleCloseClick}>
              <FontAwesomeIcon icon={faTimes} />
            </TopButton>
          </TopContainer>
          <MiddleContainer>
            <MiddleTitle>
              myPolitics jest partnerem medialnym <span>Minecraft4Politics</span>,
              symulacji politycznej opartej na&nbsp;serwerze Minecraft!
            </MiddleTitle>
            <MiddleList>
              <MiddleListElement>
            Świat podzielony na&nbsp;<span>ćwiartki kompasu politycznego</span>
          </MiddleListElement>
            <MiddleListElement>
              Rozwinięta&nbsp;<span>ekonomia</span>
            </MiddleListElement>
            <MiddleListElement>
              Możliwość tworzenia <span>prawa</span>
            </MiddleListElement>
            <MiddleListElement>
              Adres IP: <span>mc4politics.pl</span>
            </MiddleListElement>
            <MiddleListElement>
              Wersja: <span>1.12.2 do 1.16.2</span>
            </MiddleListElement>
          </MiddleList>
        </MiddleContainer>
        <BottomContainer>
          <Link
              href="https://discord.gg/nYUzJq9"
              target="_blank"
              onClick={() => handleActionClick('Join')}
          >
            Super, dołączam!
          </Link>
          <Link
              href="https://www.facebook.com/minecraft4politics"
              target="_blank"
              type="facebook"
              onClick={() => handleActionClick('Facebook')}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </BottomContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default ModalAd;
