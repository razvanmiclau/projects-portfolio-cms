import Immutable from 'immutable';
import jwtDecode from 'jwt-decode';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../constants/auth';

// Initial State -> empty map.
const initialState = Immutable.Map({
  isAuthenticated: false,
  token: null,
  name: null
});

// Reducers -> new state
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return state.merge({
        isAuthenticated: true,
        token: action.token,
        name: jwtDecode(action.token).sub
      });
    }

    case LOGIN_FAIL:
    case LOGOUT:
      return state.merge(initialState);

    default:
      return state;
  }
}
