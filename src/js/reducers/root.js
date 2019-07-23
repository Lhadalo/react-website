import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import LanguagesReducer from './reducer_languages';
import AuthReducer from './reducer_auth';

export default combineReducers({
  form: formReducer,
  language: LanguagesReducer,
  auth: AuthReducer
});
