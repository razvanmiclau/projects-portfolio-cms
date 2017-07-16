import Immutable from 'immutable';
import {
  GET_SECTIONS_SUCCESS,
  GET_SECTIONS_FAIL,
  DELETE_SECTION_SUCCESS,
  DELETE_SECTION_FAIL,
  ADD_SECTION_SUCCESS,
  ADD_SECTION_FAIL,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
} from '../constants/sections';

// Initial State -> empty map.
const initialState = Immutable.Map();

// Reducers -> new state
export default (state = initialState, action) => {
  switch (action.type) {

    case DELETE_SECTION_SUCCESS:
    case GET_SECTIONS_SUCCESS: {
      return state.merge({ list: action.sections });
    }

    case UPLOAD_IMAGE_SUCCESS: {
      return state.merge({ url: action.url });
    }

    case ADD_SECTION_SUCCESS:
    case ADD_SECTION_FAIL:
    case UPLOAD_IMAGE_FAIL:
    case DELETE_SECTION_FAIL:
    case GET_SECTIONS_FAIL: {
      return state.clear();
    }

    default:
      return state;
  }
}
