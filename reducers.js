import {combineReducers} from 'redux';
import {CompDataReducer} from 'compdata';
import QueryReducer from './shared/Query/QueryReducer';

export default combineReducers({
  CompData: CompDataReducer,
  Queries: QueryReducer
});