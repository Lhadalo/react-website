import { combineReducers } from 'redux';

import PhotosReducer from './reducer_photos';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer,
  photos: PhotosReducer
});
