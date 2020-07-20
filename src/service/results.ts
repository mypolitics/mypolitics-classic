import { API_URL, DEAFULT_OPTS } from './index';

const AxesFragment = `
    fragment AxesFragment on Axes {
          anarchism
          anthropocentrism
          authoritarianism
          capitalism
          communism
          cosmopolitanism
          environmentalism
          interventionism
          laissezfaire
          militarism
          nationalism
          pacifism
          progressivism
          traditionalism
    }
`;

const resultsService = {
  getResultsById: async (resultsId: string) => {
    const query = `
        ${AxesFragment}
        query {
          singleResultsById(id: ${JSON.stringify(resultsId)}){
            id: _id
            additionDate
            generated
            axes {
              ... AxesFragment
            }
          }
        }
    `;

    const opts = { ...DEAFULT_OPTS, body: JSON.stringify({ query }) };

    return fetch(API_URL, opts)
      .then((res) => res.json())
      .then((res) => res.data);
  },
  addResults: async (results: Object) => {
    const query = `
        mutation($results: ResultsInput!) {
          addResults(data: $results) {
            id: _id
          }
        }
    `;

    const variables = JSON.stringify({
      results,
    });

    const opts = { ...DEAFULT_OPTS, body: JSON.stringify({ query, variables }) };

    return fetch(API_URL, opts)
      .then((res) => res.json())
      .then((res) => res.data);
  },
};

export default resultsService;
