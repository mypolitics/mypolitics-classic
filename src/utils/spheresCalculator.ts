import { AxesResults, Results } from 'store/results/types';
import { axes as axesSides } from './resultsCalculator';

export type SpheresType = {
  economics: number
  social: number
};

export enum SpheresVariant {
  Classic,
  Extended,
}

const sum = (numbers: number[]) => numbers.reduce((total, aNumber) => total + aNumber, 0);
const average = (numbers: number[]) => sum(numbers) / numbers.length;

const calcEconomicsSphere = (axes: AxesResults, method: SpheresVariant): number => {
  const calcExtended = () => {
    const econAxesSides = axesSides.slice(0, 2);
    const econLeft = econAxesSides.map((side) => axes[side.left]);
    const econRight = econAxesSides.map((side) => axes[side.right]);
    const econLeftAverage = average(econLeft);
    const econRightAverage = average(econRight);
    const econDifference = econRightAverage - econLeftAverage;
    return econDifference / 100;
  };

  const calcClassic = () => {
    const { left, right } = axesSides[0];
    const econLeft = axes[left];
    const econRight = axes[right];
    const econDifference = econRight - econLeft;
    return econDifference / 100;
  };

  return method === SpheresVariant.Classic ? calcClassic() : calcExtended();
};

const calcSocialSphere = (axes: AxesResults, method: SpheresVariant): number => {
  const calcExtended = () => {
    const socialAxesSides = axesSides
      .slice(2)
      .filter((side) => !side.notApplicableToSpheres);

    const socialLeft = socialAxesSides.map((side) => axes[side.left]);
    const socialRight = socialAxesSides.map((side) => axes[side.right]);
    const socialLeftAverage = average(socialLeft);
    const socialRightAverage = average(socialRight);
    const socialDifference = socialRightAverage - socialLeftAverage;
    return socialDifference / 100;
  };

  const calcClassic = () => {
    const { left, right } = axesSides[2];
    const socialSum = axes[left] + axes[right];
    const socialLeft = (axes[left] / socialSum) * 100;
    const socialRight = (axes[right] / socialSum) * 100;
    const socialDifference = socialRight - socialLeft;
    console.log(socialLeft, socialRight)
    return socialDifference / 100;
  };

  return method === SpheresVariant.Classic ? calcClassic() : calcExtended();
};

export const calcSpheresResults = (
  results: Results,
  method: SpheresVariant,
): SpheresType => ({
  economics: calcEconomicsSphere(results.axes, method),
  social: calcSocialSphere(results.axes, method),
});

export default calcSpheresResults;
