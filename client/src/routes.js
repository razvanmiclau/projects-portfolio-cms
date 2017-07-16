import React from 'react';
import { Provider } from 'react-redux';
import storeConfig from './store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { loginSuccess } from './actions/auth';
import userAuthenticated from './utils/authWrapper';

// Components
import Home from './components/User/Home';
import HomeContainer from './components/User/HomePage';

import Admin from './components/Admin/Admin';
import Login from './components/Login';

import AdminContainer from './components/Admin/Pages/AdminPage';
import ProjectsContainer from './components/Admin/Pages/ProjectsPage';
import SectionsContainer from './components/Admin/Pages/SectionsPage';

import AddProjectContainer from './components/Admin/AddProject';
import AddSectionContainer from './components/Admin/AddSection';

import { syncHistoryWithStore, push } from 'react-router-redux';

const store = storeConfig();

// http://razvanmiclau.com/ => Home -> HomeContainer
// http://razvanmiclau.com/admin => Admin -> AdminContainer
// http://razvanmiclau.com/admin/projects => ProjectsContainer
// http://razvanmiclau.com/admin/projects/add => AddProjectContainer
// http://razvanmiclau.com/admin/sections => SectionsContainer
// http://razvanmiclau.com/admin/sections/add AddSectionContainer

const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toObject();
  }
});

const options = {
  authSelector: state => state.get('auth'),
  predicate: authenticate => authenticate.get('isAuthenticated'),
  redirectAction: ({ pathname, query }) => {
    if (query.redirect)
      return push(`authenticate${pathname}?next=${query.redirect}`);
  },
  wrapperDisplayName: 'UserIsJWTAuthenticated'
};

const requireAuth = userAuthenticated(options);

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}>
        <IndexRoute component={HomeContainer} />
      </Route>
      <Route path="/admin" component={requireAuth(Admin)}>
        <IndexRoute component={AdminContainer} />
        <Route path="projects" component={ProjectsContainer}>
          <Route path="add" component={AddProjectContainer} />
        </Route>
        <Route path="sections" component={SectionsContainer}>
          <Route path="add" component={AddSectionContainer} />
        </Route>
      </Route>
      <Route path="/authenticate" component={Home}>
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>
);

const token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(loginSuccess(token));
}

export default routes;
