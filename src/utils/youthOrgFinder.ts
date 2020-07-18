import { SpheresType } from './spheresCalculator';
import { YouthOrg, youthOrgs } from './youthOrgsValues';

export const findYouthOrg = (
  spheresValues: SpheresType,
): YouthOrg | null => {
  let closestYouthOrg = null;
  let shortestYouthOrgDistance = Infinity;

  for (let i = 0; i < youthOrgs.length; i += 1) {
    const youthOrg = youthOrgs[i];

    const economicsDifference = (youthOrg.spheresValues.economics - spheresValues.economics) ** 2;
    const socialDifference = (youthOrg.spheresValues.social - spheresValues.social) ** 2;

    const presentYouthOrgDistance = Math.sqrt(economicsDifference + socialDifference);

    if (presentYouthOrgDistance < shortestYouthOrgDistance) {
      closestYouthOrg = youthOrg;
      shortestYouthOrgDistance = presentYouthOrgDistance;
    }
  }

  const distanceTooBig = shortestYouthOrgDistance > 0.5;

  return distanceTooBig ? null : closestYouthOrg;
};

export default findYouthOrg;
