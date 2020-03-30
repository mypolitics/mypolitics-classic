import { SpheresType } from './spheresCalculator';
import { Party, parties } from './partiesValues';

export const findParty = (spheresValues: SpheresType): Party | null => {
  let closestParty = null;
  let shortestPartyDistance = Infinity;

  for (let i = 0; i < parties.length; i += 1) {
    const party = parties[i];

    const economicsDifference = (party.spheresValues.economics - spheresValues.economics) ** 2;
    const socialDifference = (party.spheresValues.social - spheresValues.social) ** 2;

    const presentPartyDistance = Math.sqrt(economicsDifference + socialDifference);

    if (presentPartyDistance < shortestPartyDistance) {
      closestParty = party;
      shortestPartyDistance = presentPartyDistance;
    }
  }

  const distanceTooBig = shortestPartyDistance > 0.4;

  return distanceTooBig ? null : closestParty;
};

export default findParty;
