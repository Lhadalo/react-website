import { combineReducers } from 'redux';

import nav from './nav';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  nav,
  form: formReducer
});
