import { SpheresType } from './spheresCalculator';
import ideologies from './ideologiesValues';
import ideologiesTranslations from './ideologiesTranslations';

const findIdeologyIndex = (spheresValues: SpheresType): number => {
  let closestIdeologyIndex = 0;
  let shortestIdeologyDistance = Infinity;

  for (let i = 0; i < ideologies.length; i++) {
    const ideology = ideologies[i];
    let presentIdeologyDistance = 0;

    presentIdeologyDistance
      += Math.abs(
        ideology.spheresValues.economics - spheresValues.economics,
      ) ** 2;

    presentIdeologyDistance
      += Math.abs(
        ideology.spheresValues.social - spheresValues.social,
      ) ** 2;

    if (presentIdeologyDistance < shortestIdeologyDistance) {
      closestIdeologyIndex = i;
      shortestIdeologyDistance = presentIdeologyDistance;
    }
  };

  return closestIdeologyIndex;
};

const getIdeologyNameByIndex = (index: number, lang: string): string => {
  const localeIdeologies = ideologiesTranslations.find(
    (ideologies) => ideologies.lang === lang,
  );
  if (localeIdeologies !== undefined) {
    return localeIdeologies.values[index].name;
  }
  return 'NOT_FOUND';
};

const findIdeology = (spheresValues: SpheresType): string => {
  const ideologyIndex = findIdeologyIndex(spheresValues);
  const ideologyName = getIdeologyNameByIndex(ideologyIndex, 'pl-PL');

  return ideologyName
};

export default findIdeology;
