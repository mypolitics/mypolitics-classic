import quizService from './quiz';
import resultsService from './results';

export const API_URL = process.env.NODE_ENV !== 'production' ? 'https://api.mypolitics.pl/' : '/api';
export const DEAFULT_OPTS = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};

const service = {
  ...quizService,
  ...resultsService,
};

export default service;
