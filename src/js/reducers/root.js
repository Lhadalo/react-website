import { combineReducers } from 'redux';

import nav from './nav';
import PhotosReducer from './reducer_photos';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  nav,
  form: formReducer,
  photos: PhotosReducer
});
