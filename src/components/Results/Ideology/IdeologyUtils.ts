// Bottom left (x, y), top right (x, y)
import { SpheresType } from '../../../utils/spheresCalculator';

type IdeologyRectangle = [[number, number], [number, number]];

interface Ideology {
  name: string;
  range: IdeologyRectangle[];
}

export const ideologiesValues: Ideology[] = [
  {
    name: 'Stalinizm',
    range: [
      [[-1.0, 0.7], [-0.7, 1.0]],
    ],
  },
  {
    name: 'Strasseryzm',
    range: [
      [[-0.7, 0.8], [-0.2, 1.0]],
    ],
  },
  {
    name: 'Faszyzm',
    range: [
      [[-0.2, 0.8], [0.2, 1.0]],
    ],
  },
  {
    name: 'Frankizm',
    range: [
      [[0.2, 0.8], [0.7, 1.0]],
    ],
  },
  {
    name: 'Kapitalizm dyktatorski',
    range: [
      [[0.7, 0.7], [1.0, 1.0]],
    ],
  },
  {
    name: 'Socjalizm',
    range: [
      [[-1.0, -0.4], [-0.8, 0.0]],
      [[-1.0, 0.0], [-0.6, 0.7]],
      [[-0.7, 0.7], [-0.6, 0.8]],
    ],
  },
  {
    name: 'Etatyzm',
    range: [
      [[-0.6, 0.0], [-0.2, 0.8]],
      [[-0.2, 0.2], [0.0, 0.8]],
    ],
  },
  {
    name: 'Tradycjonalizm',
    range: [
      [[0.0, 0.4], [0.7, 0.8]],
      [[0.7, 0.4], [1.0, 0.7]],
    ],
  },
  {
    name: 'Konserwatyzm',
    range: [
      [[0.0, 0.2], [0.7, 0.4]],
      [[0.3, 0.1], [0.7, 0.2]],
    ],
  },
  {
    name: 'Paleolibertarianizm',
    range: [
      [[0.8, -0.2], [1.0, 0.4]],
    ],
  },
  {
    name: 'Centryzm',
    range: [
      [[-0.3, -0.2], [0.3, 0.2]],
    ],
  },
  {
    name: 'Konserwatywny liberalizm',
    range: [
      [[0.3, -0.2], [0.7, 0.1]],
    ],
  },
  {
    name: 'Socjaldemokracja',
    range: [
      [[-0.8, -0.4], [-0.3, 0.0]],
      [[-0.3, -0.4], [-0.2, -0.2]],
    ],
  },
  {
    name: 'Nowa lewica',
    range: [
      [[-1.0, -0.7], [-0.4, -0.4]],
      [[-0.7, -0.8], [-0.4, -0.7]],
    ],
  },
  {
    name: 'Anarchokomunizm',
    range: [
      [[-1.0, -1.0], [-0.7, -0.7]],
    ],
  },
  {
    name: 'Socjalliberalizm',
    range: [
      [[-0.4, -0.8], [0.0, -0.4]],
      [[-0.2, -0.4], [0.0, -0.2]],
    ],
  },
  {
    name: 'Syndykalizm',
    range: [
      [[-0.7, -1.0], [0.0, -0.8]],
    ],
  },
  {
    name: 'Agoryzm',
    range: [
      [[0.0, -1.0], [0.5, -0.8]],
    ],
  },
  {
    name: 'Liberalizm',
    range: [
      [[0.0, -0.8], [0.5, -0.2]],
    ],
  },
  {
    name: 'Libertarianizm',
    range: [
      [[0.5, -1.0], [0.7, -0.7]],
      [[0.5, -0.7], [1.0, -0.2]],
    ],
  },
  {
    name: 'Anarchokapitalizm',
    range: [
      [[0.7, -1.0], [1.0, -0.7]],
    ],
  },
];

export const getIdeologyName = ({ economics: x, social: y }: SpheresType) => {
  let ideology = 'Brak ideologii';

  for (let i = 0; i < ideologiesValues.length; i++) {
    const { range, name } = ideologiesValues[i];
    for (let j = 0; j < range.length; j++) {
      const [[x1, y1], [x2, y2]] = range[j];
      const pointInRange = (x >= x1 && x <= x2 && y >= y1 && y <= y2);
      if (pointInRange) {
        ideology = name;
      }
    }
  }

  return ideology;
};
