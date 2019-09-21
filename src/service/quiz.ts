import { API_URL, DEAFULT_OPTS } from './index';

const quizService = {
  getQuestionByIndex: async (questionIndex: number) => {
    const query = `
        query {
            question(index: ${questionIndex}) {
                totalCount
                index
                text
                category
                affirmativeAnswerEffects
                negativeAnswerEffects
            }
        }
    `;

    const opts = { ...DEAFULT_OPTS, body: JSON.stringify({ query }) };

    return fetch(API_URL, opts)
      .then((res) => res.json())
      .then((res) => res.data.question);
  },
};

export default quizService;
