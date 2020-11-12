import * as React from 'react';
import { SpheresType } from 'utils/spheresCalculator';
import { Party } from '../../../utils/partiesValues';
import { YouthOrg } from '../../../utils/youthOrgsValues';
import findParty from '../../../utils/partyFinder';
import findYouthOrg from '../../../utils/youthOrgFinder';

const round = (value: number): number => (
  Math.round((value + Number.EPSILON) * 100) / 100
);

const correctPosition = (value: number): string => {
  const roundedValue = round(value);
  const correctValue = (roundedValue / 2 + 0.5) * 100;
  return `${correctValue}%`;
};

type FindOrgFunction = (spheresResult: SpheresType) => Party | YouthOrg;

export const getOrganizationElements = (
  organizationType: 'party' | 'youthOrg',
  inRow: number = 10,
  parliamentOnly: boolean = false,
  radius: number,
): JSX.Element[] => {
  const elements: JSX.Element[] = [];

  for (let i = 0; i <= inRow; i += 1) {
    for (let j = 0; j <= inRow; j += 1) {
      const position: SpheresType = {
        economics: ((i / inRow) * 2) - 1,
        social: ((j / inRow) * 2) - 1,
      };

      const finderPosition: SpheresType = {
        economics: position.economics + 0.1,
        social: position.social + 0.1,
      };

      const size = `${round((1 / inRow) * 100)}%`;

      const style: React.CSSProperties = {
        left: correctPosition(position.economics),
        bottom: correctPosition(position.social),
        width: size,
        height: size,
        top: 'unset',
        position: 'absolute',
        borderRadius: 0,
        opacity: 0.6,
      };

      const org = organizationType === 'party'
        ? findParty(finderPosition, parliamentOnly, radius)
        : findYouthOrg(finderPosition, radius);

      if (org) {
        elements.push(
          <img
            src={org.logo}
            alt={org.name}
            style={style}
          />,
        );
      } else {
        elements.push(
          <div style={{
            ...style,
            background: 'var(--black)',
            opacity: 0.9,
          }}
          />,
        );
      }
    }
  }

  return elements;
};
