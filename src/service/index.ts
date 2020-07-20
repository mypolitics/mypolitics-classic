import quizService from './quiz';
import resultsService from './results';

export const API_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : '/api';
export const DEAFULT_OPTS = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};

const service = {
  ...quizService,
  ...resultsService,
};

export default service;
