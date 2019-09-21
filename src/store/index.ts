import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { quizReducer } from './quiz/reducer';
import { QuizState } from './quiz/types';
import { ResultsState } from './results/types';
import { resultsReducer } from './results/reducer';

export interface RootState {
  quiz: QuizState;
  results: ResultsState;
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['results/results'],
};

const rootReducer = combineReducers({
  quiz: quizReducer,
  results: resultsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, composeWithDevTools());
  const persistor = persistStore(store);
  return { store, persistor };
};
