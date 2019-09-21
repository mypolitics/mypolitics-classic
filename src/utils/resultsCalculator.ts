import { Answer } from 'store/quiz/types';
import { Results, AxesResults } from 'store/results/types';

interface Axis {
  left: string;
  right: string;
}

interface Scores {
  [key: string]: Score;
}

interface Score {
  val: number;
  sum: number;
}

export const axes: Axis[] = [
  {
    left: 'communism',
    right: 'capitalism',
  },
  {
    left: 'interventionism',
    right: 'laissezfaire',
  },
  {
    left: 'anarchism',
    right: 'authoritarianism',
  },
  {
    left: 'pacifism',
    right: 'militarism',
  },
  {
    left: 'environmentalism',
    right: 'anthropocentrism',
  },
  {
    left: 'progressivism',
    right: 'traditionalism',
  },
  {
    left: 'cosmopolitanism',
    right: 'nationalism',
  },
];

const initScores = (answers: Answer[]) => {
  const scores: Scores = {};

  axes.forEach((axis) => {
    scores[axis.left] = {
      val: 0,
      sum: 0,
    };
    scores[axis.right] = {
      val: 0,
      sum: 0,
    };
  });

  answers.forEach((answer) => {
    answer.effects.forEach((ideology) => {
      scores[ideology].val += Math.abs(answer.strength);
      scores[ideology].sum += 3;
    });
  });

  return scores;
};

const getPercentResultValues = (scores: Scores) => {
  const results: AxesResults = {};

  axes.forEach((axis) => {
    const leftScore = scores[axis.left].val;
    const rightScore = scores[axis.right].val;
    const axisMaxScore = scores[axis.left].sum + scores[axis.right].sum;

    if (axisMaxScore > 0) {
      const leftResult = ((100 * leftScore) / axisMaxScore).toFixed(0);
      const rightResult = ((100 * rightScore) / axisMaxScore).toFixed(0);

      results[axis.left] = parseInt(leftResult, 10);
      results[axis.right] = parseInt(rightResult, 10);
    } else {
      results[axis.left] = 0;
      results[axis.right] = 0;
    }
  });

  return results;
};

export const calcResults = (answers: Answer[]): Results => {
  const scores = initScores(answers);
  const results: Results = {
    axes: getPercentResultValues(scores),
    additionDate: new Date().toISOString(),
  };

  return results;
};
