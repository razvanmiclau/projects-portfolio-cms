import Immutable from 'immutable';
import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  SEARCH_QUERY,
  DISPLAY_PROJECT_DETAILS
} from '../constants/projects';

// Initial State -> empty map.
const initialState = Immutable.Map();

// Reducers -> new state
export default (state = initialState, action) => {
  switch (action.type) {

    case DELETE_PROJECT_SUCCESS:
    case GET_PROJECTS_SUCCESS: {
      return state.merge({ list: action.projects });
    }

    case UPLOAD_IMAGE_SUCCESS: {
      return state.merge({ url: action.url });
    }

    case SEARCH_QUERY: {
      return state.merge({ searchBar: action.keyword });
    }

    case DISPLAY_PROJECT_DETAILS: {
      return state.merge({ selectedProject: action.project });
    }

    case ADD_PROJECT_SUCCESS:
    case ADD_PROJECT_FAIL:
    case UPLOAD_IMAGE_FAIL:
    case DELETE_PROJECT_FAIL:
    case GET_PROJECTS_FAIL: {
      return state.clear();
    }

    default:
      return state;
  }
}
