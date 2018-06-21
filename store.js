import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const middlewares = [thunk, logger];
// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }
const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);
export default store;