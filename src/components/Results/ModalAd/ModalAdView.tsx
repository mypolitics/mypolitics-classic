import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { Results } from 'store/results/types';
import {
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
  Wrapper,
} from './ModalAdStyle';
import { getShowValue, setShowValue } from './ModalAdUtilts';

library.add(faTimes, faFacebookF, faDiscord);

interface Props {
  results: Results
}

const defaultShow = getShowValue();

const ModalAd: React.FC<Props> = ({ results }: Props) => {
  const [show, setShow] = React.useState<boolean>(defaultShow);

  const handleCloseClick = () => {
    const currentTime = new Date().getTime();
    setShowValue(currentTime);
    setShow(false);
  };

  const handleLinkClick = (type: 'Join' | 'Facebook' | 'Discord') => {
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

  return (
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
          </MiddleList>
        </MiddleContainer>
        <BottomContainer>
          <Link
            href="https://forms.gle/gsp1kJPknLQwz3v5A"
            target="_blank"
            onClick={() => handleLinkClick('Join')}
          >
            Super, dołączam!
          </Link>
          <Link
            href="https://discord.gg/4Czawyz"
            target="_blank"
            type="discord"
            onClick={() => handleLinkClick('Discord')}
          >
            <FontAwesomeIcon icon={faDiscord} />
          </Link>
          <Link
            href="https://www.facebook.com/minecraft4politics"
            target="_blank"
            type="facebook"
            onClick={() => handleLinkClick('Facebook')}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
        </BottomContainer>
      </Container>
    </Wrapper>
  );
};

export default ModalAd;
