import { SpheresType } from './spheresCalculator';
import { Party, parties } from './partiesValues';

export interface PartyDistance {
  distance: number;
  party: Party;
}

export const findAllPartiesDistances = (
  spheresValues: SpheresType,
  parliamentOnly: boolean,
): PartyDistance[] => {
  const partiesList = parliamentOnly
    ? parties.filter((p) => p.parliamentRepresentation)
    : parties;

  const partiesDistancesList: PartyDistance[] = partiesList.map((party) => {
    const economicsDifference = (party.spheresValues.economics - spheresValues.economics) ** 2;
    const socialDifference = (party.spheresValues.social - spheresValues.social) ** 2;
    const distance = Math.sqrt(economicsDifference + socialDifference);

    return {
      distance,
      party,
    };
  });

  return partiesDistancesList.sort((a, b) => a.distance - b.distance);
};

export const findParty = (
  spheresValues: SpheresType,
  parliamentOnly: boolean,
  radius: number = 0.5,
): Party | null => {
  const partiesDistance = findAllPartiesDistances(spheresValues, parliamentOnly);
  const { distance, party } = partiesDistance[0];
  const distanceTooBig = distance > radius;
  return distanceTooBig ? null : party;
};

export default findParty;
