import { SpheresType } from './spheresCalculator';

export type Quarter = 'blue' | 'violet' | 'green' | 'red' | 'center';

export const getQuarterName = ({ economics, social }: SpheresType): Quarter => {
  const table: Record<string, Quarter> = {
    [(economics >= 0) && (social >= 0) ? 'true' : 'false']: 'blue',
    [(economics >= 0) && (social <= 0) ? 'true' : 'false']: 'violet',
    [(economics <= 0) && (social <= 0) ? 'true' : 'false']: 'green',
    [(economics <= 0) && (social >= 0) ? 'true' : 'false']: 'red',
    [(economics === 0) && (social === 0) ? 'true' : 'false']: 'center',
  };

  return table.true || 'center';
};
