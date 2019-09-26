import { SpheresType } from './spheresCalculator';
import { Party, parties } from './partiesValues';

export const findParty = (spheresValues: SpheresType): Party | null => {
  let closestParty = null;
  let shortestPartyDistance = Infinity;

  for (let i = 0; i < parties.length; i += 1) {
    const party = parties[i];
    let presentPartyDistance = 0;

    presentPartyDistance
      += Math.abs(
        party.spheresValues.economics - spheresValues.economics,
      ) ** 2;

    presentPartyDistance
      += Math.abs(
        party.spheresValues.social - spheresValues.social,
      ) ** 2;

    if (presentPartyDistance < shortestPartyDistance) {
      closestParty = party;
      shortestPartyDistance = presentPartyDistance;
    }
  }

  return closestParty;
};

export default findParty;
