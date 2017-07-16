import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';
import reducer from './reducers';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import isAuthenticated from './utils/auth';

const initialState = Immutable.fromJS({
  auth: isAuthenticated()
});

const storeConfig = () => {
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(hashHistory);
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, routeMiddleware))
  );
  // start all sagas in paralllel.
  sagaMiddleware.run(rootSaga);

  return store;
}

export default storeConfig;
