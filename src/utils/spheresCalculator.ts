import { Results, AxesResults } from 'store/results/types';
import { axes as axesSides } from './resultsCalculator';

export type SpheresType = {
  economics: number
  social: number
};

const sum = (numbers: number[]) => numbers.reduce((total, aNumber) => total + aNumber, 0);
const average = (numbers: number[]) => sum(numbers) / numbers.length;

const calcEconomicsSphere = (axes: AxesResults): number => {
  const econAxesSides = axesSides.slice(0, 1);

  const econLeft = econAxesSides.map((side) => axes[side.left]);

  const econRight = econAxesSides.map((side) => axes[side.right]);

  const econLeftAverage = average(econLeft);
  const econRightAverage = average(econRight);
  const econAverageMax = econLeftAverage + econRightAverage;

  const econScore = 1 - 2 * (econLeftAverage / econAverageMax);

  return econScore;
};

const calcSocialSphere = (axes: AxesResults): number => {
  const socialAxesSides = axesSides.slice(2);

  const socialLeft = socialAxesSides.map((side) => axes[side.left]);

  const socialRight = socialAxesSides.map((side) => axes[side.right]);

  const socialLeftAverage = average(socialLeft);
  const socialRightAverage = average(socialRight);
  const socialAverageMax = socialLeftAverage + socialRightAverage;

  const socialScore = 1 - 2 * (socialLeftAverage / socialAverageMax);

  return socialScore;
};

export const calcSpheresResults = (results: Results): SpheresType => ({
  economics: calcEconomicsSphere(results.axes),
  social: calcSocialSphere(results.axes),
});

export default calcSpheresResults;
