import { Results } from 'store/results/types';
import ideologiesValues from './ideologiesValues';
import ideologiesTranslations from './ideologiesTranslations';

const getClosestIdeologyIndexAndAccuracy = (results: Results) => {
  const {
    communism,
    capitalism,
    interventionism,
    laissezfaire,
    anarchism,
    pacifism,
    progressivism,
  } = results.axes;
  const communismAndInterventionism = (communism
      + (100 - (capitalism + communism)) / 3
      + (interventionism + (100 - (laissezfaire + interventionism)) / 3))
    / 2;

  let ideologyIndex = 0;
  let accuracy = 0;
  let longestIdeologyDistance = 0;
  let shortestIdeologyDistance = Infinity;

  for (let i = 0; i < ideologiesValues.length; i++) {
    const ideology = ideologiesValues[i];
    let presentIdeologyDistance = 0;

    presentIdeologyDistance
      += Math.abs(
        ideology.values.communismAndInterventionism
          - communismAndInterventionism,
      ) ** 2;

    presentIdeologyDistance
      += Math.abs(ideology.values.anarchism - anarchism) ** 2;

    presentIdeologyDistance
      += Math.abs(ideology.values.pacifism - pacifism) ** 1.74;

    presentIdeologyDistance
      += Math.abs(ideology.values.progressivism - progressivism) ** 1.74;

    if (longestIdeologyDistance === 0) {
      longestIdeologyDistance = presentIdeologyDistance;
    }

    if (presentIdeologyDistance < shortestIdeologyDistance) {
      ideologyIndex = ideologiesValues.indexOf(ideology);
      accuracy = Math.floor(
        100 - presentIdeologyDistance / longestIdeologyDistance,
      );
      shortestIdeologyDistance = presentIdeologyDistance;
    }
  }

  return {
    index: ideologyIndex + 1,
    accuracy,
  };
};

const getIdeologyNameByIndex = (index: number, lang: string) => {
  const localeIdeologies = ideologiesTranslations.find(
    (ideologies) => ideologies.lang === lang,
  );
  if (localeIdeologies !== undefined) {
    return localeIdeologies.values[index].name;
  }
  return 'NOT_FOUND';
};

const findIdeology = (results: Results) => {
  const ideologyIndexAndAccuracy = getClosestIdeologyIndexAndAccuracy(results);
  const ideologyIndex = ideologyIndexAndAccuracy.index;
  const ideologyName = getIdeologyNameByIndex(ideologyIndex, 'pl-PL');

  return {
    name: ideologyName,
    accuracy: ideologyIndexAndAccuracy.accuracy,
  };
};

export default findIdeology;
