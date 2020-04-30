import { Results, AxesResults } from 'store/results/types';
import { axes as axesSides } from './resultsCalculator';

export type SpheresType = {
  economics: number
  social: number
};

const sum = (numbers: number[]) => numbers.reduce((total, aNumber) => total + aNumber, 0);
const average = (numbers: number[]) => sum(numbers) / numbers.length;

const calcEconomicsSphere = (axes: AxesResults): number => {
  const econAxesSides = axesSides.slice(0, 2);

  const econLeft = econAxesSides.map((side) => axes[side.left]);
  const econLeftAverage = average(econLeft);
  const econScore = 1 - 2 * (econLeftAverage / 100);

  return econScore;
};

const calcSocialSphere = (axes: AxesResults): number => {
  const socialAxesSides = axesSides
    .slice(2)
    .filter((side) => !side.notApplicableToSpheres);

  const socialLeft = socialAxesSides.map((side) => axes[side.left]);
  const socialLeftAverage = average(socialLeft);
  const socialScore = 1 - 2 * (socialLeftAverage / 100);

  return socialScore;
};

export const calcSpheresResults = (results: Results): SpheresType => ({
  economics: calcEconomicsSphere(results.axes),
  social: calcSocialSphere(results.axes),
});

export default calcSpheresResults;
