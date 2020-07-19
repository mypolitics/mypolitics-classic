import { SpheresType } from './spheresCalculator';
import { Party, parties } from './partiesValues';

export const findParty = (
  spheresValues: SpheresType,
  parliamentOnly: boolean,
  radius: number = 0.5,
): Party | null => {
  let closestParty = null;
  let shortestPartyDistance = Infinity;
  const partiesList = parliamentOnly
    ? parties.filter((p) => p.parliamentRepresentation)
    : parties;

  for (let i = 0; i < partiesList.length; i += 1) {
    const party = partiesList[i];

    const economicsDifference = (party.spheresValues.economics - spheresValues.economics) ** 2;
    const socialDifference = (party.spheresValues.social - spheresValues.social) ** 2;

    const presentPartyDistance = Math.sqrt(economicsDifference + socialDifference);

    if (presentPartyDistance < shortestPartyDistance) {
      closestParty = party;
      shortestPartyDistance = presentPartyDistance;
    }
  }

  const distanceTooBig = shortestPartyDistance > radius;

  return distanceTooBig ? null : closestParty;
};

export default findParty;
