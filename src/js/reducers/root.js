import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import LanguagesReducer from './reducer_languages';

export default combineReducers({
  form: formReducer,
  language: LanguagesReducer
});
