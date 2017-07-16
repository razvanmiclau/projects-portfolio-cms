import { combineReducers } from 'redux-immutable';
// Import Reducers
import projects from './projects';
import sections from './sections';
import auth from './auth';
import routing from './routing';
import { reducer as form } from 'redux-form/immutable';

// Combine all reducers
export default combineReducers({
  projects,
  sections,
  form,
  auth,
  routing
});
