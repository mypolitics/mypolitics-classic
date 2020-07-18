import * as React from 'react';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import { SpheresType } from 'utils/spheresCalculator';
import findYouthOrg from 'utils/youthOrgFinder';
import YouthOrgView from './YouthOrgView';

type Props = {
  spheresResults: SpheresType
};

const YouthOrg: React.FC<Props> = ({ spheresResults }) => {
  const youthOrg = findYouthOrg({
    economics: spheresResults.economics,
    social: spheresResults.social,
  });

  const handleLinkButtonClick = () => {
    ReactGA.event({
      category: 'YouthOrg',
      action: 'Youth Organization Link Clicked',
      label: youthOrg ? youthOrg.name : 'NOT_FOUND',
    });

    ReactPixel.trackCustom('YouthOrgLinkClicked', {
      youthOrg: youthOrg ? youthOrg.name : 'NOT_FOUND',
    });
  };

  return (
    <YouthOrgView
      youthOrg={youthOrg}
      onLinkButtonClick={handleLinkButtonClick}
    />
  );
};

export default YouthOrg;
