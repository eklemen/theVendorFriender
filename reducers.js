import {combineReducers} from 'redux';
import {CompDataReducer} from 'compdata';
import {QueryReducer} from 'axios-redux';

export default combineReducers({
  CompData: CompDataReducer,
  Queries: QueryReducer
});