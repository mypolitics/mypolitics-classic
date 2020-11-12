import React from 'react';
import { SpheresType } from '../../../utils/spheresCalculator';
import { Container, Title, Image, ImagesWrapper, Link, LinkWrapper } from './PolitykawkaAdStyle';
import { getProductData, getProducts } from './PolitykawkaAdUtils';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

interface Props {
  spheresResults: SpheresType;
}

const PolitykawkaAdView: React.FC<Props> = ({ spheresResults }) => {
  const products = getProducts(spheresResults);

  return (
    <Container>
      <Title>
        Koszulki i gadżety polityczne!
      </Title>
      <ImagesWrapper>
        {products.map((product) => (
          <ProductLink key={product} fullName={product} />
        ))}
      </ImagesWrapper>
      <LinkWrapper>
        <Link href="https://politykawka.pl" target="_blank">
          <img
            className="darkmode-bw-image"
            src="/images/politykawka.png"
            alt="Politykawka"
          />
        </Link>
      </LinkWrapper>
    </Container>
  );
};

export const ProductLink: React.FC<{ fullName: string; }> = ({ fullName }) => {
  const { id, img, link } = getProductData(fullName);

  const handleClick = () => {
    ReactGA.event({
      category: 'PolitykawkaAd',
      action: 'ImageClick',
      label: id,
    });

    ReactPixel.trackCustom('PolitykawkaAdImageClick', {
      id,
    });
  };

  return (
    <a href={link} target="_blank" onClick={handleClick}>
      <Image
        src={img}
        alt={id}
      />
    </a>
  );
};

export default PolitykawkaAdView;
