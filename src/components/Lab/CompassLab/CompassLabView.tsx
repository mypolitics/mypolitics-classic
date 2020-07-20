import React, { ChangeEvent } from 'react';

import { SpheresType } from 'utils/spheresCalculator';
import {
  Container,
  CompassContainer,
  CompassImage,
  Inner,
  Divider,
  CompassPoint,
  TopWrapper,
  CompassDistribution
} from './CompassLabStyle';
import Input from 'shared/Input';
import Select from 'shared/Select';

import Party from '../../Results/Party';
import YouthOrg from '../../Results/YouthOrg';
import Ideology from '../../Results/Ideology';
import { getOrganizationElements } from './CompassLabUtils';

interface Show {
  party: boolean;
  distribution: boolean;
  youthOrg: boolean;
  position: boolean;
  ideology: boolean;
}

interface Distribution {
  inRow: number;
  type: 'party' | 'youthOrg';
  parliamentOnly: boolean;
  partyRadius: number;
  youthOrgRadius: number;
}

const CompassLab: React.FC = () => {
  const [show, setShow] = React.useState<Show>({
    party: false,
    youthOrg: false,
    position: true,
    distribution: false,
    ideology: false,
  });
  const [spheresResult, setSpheresResult] = React.useState<SpheresType>({
    economics: 0.0,
    social: 0.0,
  });
  const [distribution, setDistribution] = React.useState<Distribution>({
    inRow: 10,
    type: 'party',
    parliamentOnly: false,
    partyRadius: 0.5,
    youthOrgRadius: 0.4,
  });

  const handleSpheresChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    const correctedValue = value > 1 ? 1 : (value < -1 ? -1 : value);

    const updatedSpheresResult: SpheresType = {
      ...spheresResult,
      [e.target.name]: correctedValue,
    };

    setSpheresResult(updatedSpheresResult);
  };

  const handleShowChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedShow: Show = {
      ...show,
      [e.target.name]: e.target.checked,
    };

    setShow(updatedShow);
  };

  const handleDistributionChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const isCheckbox = e.target.type === 'checkbox';
    const numValue = e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value;
    const value = isCheckbox ? (e.target as HTMLInputElement).checked : numValue;

    const updatedDistribution: Distribution = {
      ...distribution,
      [e.target.name]: value,
    };

    setDistribution(updatedDistribution);
  };

  return (
    <Container>
      <TopWrapper>
        <CompassView
          spheresResult={spheresResult}
          showPosition={show.position}
          showDistribution={show.distribution}
          distribution={distribution}
        />
      </TopWrapper>
      <Inner>
        <Input
          label="Oś ekonomiczna"
          type="number"
          name="economics"
          step={0.1}
          value={spheresResult.economics}
          onChange={handleSpheresChange}
        />
        <Input
          label="Oś obyczajowa"
          type="number"
          name="social"
          step={0.1}
          value={spheresResult.social}
          onChange={handleSpheresChange}
        />
        {show.ideology && (
          <Ideology
            spheresResults={spheresResult}
          />
        )}
        {show.party && (
          <Party
            spheresResults={spheresResult}
          />
        )}
        {show.youthOrg && (
          <YouthOrg
            spheresResults={spheresResult}
          />
        )}
        <Divider />
        <Input
          label="Pozycja"
          type="checkbox"
          name="position"
          checked={show.position}
          onChange={handleShowChange}
        />
        <Input
          label="Najbliższa partia"
          type="checkbox"
          name="party"
          checked={show.party}
          onChange={handleShowChange}
        />
        <Input
          label="Najbliższa młodzieżówka"
          type="checkbox"
          name="youthOrg"
          checked={show.youthOrg}
          onChange={handleShowChange}
        />
        <Input
          label="Najbliższa ideologia"
          type="checkbox"
          name="ideology"
          checked={show.ideology}
          onChange={handleShowChange}
        />
        <Divider />
        <Input
          label="Rozkład organizacji"
          type="checkbox"
          name="distribution"
          checked={show.distribution}
          onChange={handleShowChange}
        />
        {show.distribution && (
          <>
            <Select
              name="type"
              value={distribution.type}
              onChange={handleDistributionChange}
            >
              <option value="party">
                Partie
              </option>
              <option value="youthOrg">
                Młodzieżówki
              </option>
            </Select>
            {distribution.type === 'party' && (
              <>
                <Input
                  label="Tylko Sejm"
                  type="checkbox"
                  name="parliamentOnly"
                  checked={distribution.parliamentOnly}
                  onChange={handleDistributionChange}
                />
                <Input
                  label="Promień"
                  type="number"
                  name="partyRadius"
                  step={0.1}
                  min={0.1}
                  value={distribution.partyRadius}
                  onChange={handleDistributionChange}
                />
              </>
            )}
            {distribution.type === 'youthOrg' && (
              <Input
                label="Promień"
                type="number"
                name="youthOrgRadius"
                step={0.1}
                min={0.1}
                value={distribution.youthOrgRadius}
                onChange={handleDistributionChange}
              />
            )}
            <Input
              label="W rzędzie"
              type="number"
              name="inRow"
              step={5}
              min={5}
              value={distribution.inRow}
              onChange={handleDistributionChange}
            />
          </>
        )}
      </Inner>
    </Container>
  );
};

interface CompassViewProps {
  spheresResult: SpheresType
  showPosition: boolean
  distribution: Distribution
  showDistribution: boolean
}

const CompassView: React.FC<CompassViewProps> = ({
  spheresResult,
  showPosition,
  showDistribution,
  distribution,
}) => {
  const Distribution: React.FC = () => {
    const { type, inRow, parliamentOnly, partyRadius, youthOrgRadius } = distribution;
    const radius = type === 'party' ? partyRadius : youthOrgRadius;
    const getElements = React.useCallback(() => (
      getOrganizationElements(
        type,
        inRow,
        parliamentOnly,
        radius,
      )
    ), [type, inRow, parliamentOnly, radius]);

    const elements = getElements();

    return (
      <>
        {elements.map((el, index) => (
          <React.Fragment key={index}>
            {el}
          </React.Fragment>
        ))}
      </>
    );
  };

  const Point: React.FC = () => {
    const correctPosition = React.useCallback((value: number): string => {
      const roundedValue = Math.round((value + Number.EPSILON) * 100) / 100;
      const correctValue = (roundedValue / 2 + 0.5) * 100;
      return `calc(${correctValue}% - 0.5rem - 2px)`;
    }, [spheresResult]);

    const style: React.CSSProperties = {
      left: correctPosition(spheresResult.economics),
      bottom: correctPosition(spheresResult.social),
      top: 'unset',
    };

    return (
      <CompassPoint style={style} />
    );
  };

  return (
    <CompassContainer>
      <CompassImage src="/vectors/chart.svg" alt="Wykres" />
      {showPosition && (
        <Point />
      )}
      <CompassDistribution>
        {showDistribution && (
          <Distribution />
        )}
      </CompassDistribution>
    </CompassContainer>
  );
};

export default CompassLab;
