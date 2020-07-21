import { AxesResults, Results } from 'store/results/types';
import { axes as axesSides } from './resultsCalculator';

export type SpheresType = {
  economics: number
  social: number
};

export enum SpheresCalculatorMethod {
  Old,
  New,
}

const sum = (numbers: number[]) => numbers.reduce((total, aNumber) => total + aNumber, 0);
const average = (numbers: number[]) => sum(numbers) / numbers.length;

const calcEconomicsSphere = (axes: AxesResults, method: SpheresCalculatorMethod): number => {
  const econAxesSides = axesSides.slice(0, 2);

  const econLeft = econAxesSides.map((side) => axes[side.left]);
  const econRight = econAxesSides.map((side) => axes[side.right]);
  const econLeftAverage = average(econLeft);
  const econRightAverage = average(econRight);
  const econDifference = econRightAverage - econLeftAverage;

  const oldMethodEconScore = 1 - 2 * (econLeftAverage / 100);
  const newMethodEconScore = econDifference / 100;

  return method === SpheresCalculatorMethod.Old ? oldMethodEconScore : newMethodEconScore;
};

const calcSocialSphere = (axes: AxesResults, method: SpheresCalculatorMethod): number => {
  const socialAxesSides = axesSides
    .slice(2)
    .filter((side) => !side.notApplicableToSpheres);

  const socialLeft = socialAxesSides.map((side) => axes[side.left]);
  const socialRight = socialAxesSides.map((side) => axes[side.right]);
  const socialLeftAverage = average(socialLeft);
  const socialRightAverage = average(socialRight);
  const socialDifference = socialRightAverage - socialLeftAverage;

  const oldMethodSocialScore = 1 - 2 * (socialLeftAverage / 100);
  const newMethodSocialScore = socialDifference / 100;

  return method === SpheresCalculatorMethod.Old ? oldMethodSocialScore : newMethodSocialScore;
};

export const calcSpheresResults = (
  results: Results,
  method: SpheresCalculatorMethod,
): SpheresType => ({
  economics: calcEconomicsSphere(results.axes, method),
  social: calcSocialSphere(results.axes, method),
});

export default calcSpheresResults;
