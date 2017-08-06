import { takeLatest, delay } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  GET_PROJECTS,
  GET_PROJECT,
  DELETE_PROJECT,
  ADD_PROJECT,
  UPDATE_PROJECT,
  UPLOAD_IMAGE
} from '../constants/projects';

import {
  getProjectsSuccess,
  getProjectsFail,
  getProjectSuccess,
  getProjectFail,
  deleteProjectSuccess,
  deleteProjectFail,
  addProjectSuccess,
  addProjectFail,
  updateProjectSuccess,
  updateProjectFail,
  uploadImageSuccess,
  uploadImageFail
} from '../actions/projects';
import { logout } from '../actions/auth';

import filestack from 'filestack-js';
const fileUploader = filestack.init("At2eWk3cXTt2E43Ypq9iXz");

const selectedProjects = (state) => {
  return state.getIn(['projects', 'list']).toJS();
}

const selectedImage = (state) => {
  return state.getIn(['projects', 'url'], '');
}

const projectForm = (state) => {
  return state.getIn(['form', 'project']).toJS();
}

const fetchProjects = () => {
  return fetch(`/admin/projects`, {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => res.json())
}

const fetchProject = (id) => {
  return fetch(`/admin/projects/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method: 'GET',
  })
  .then(res => res.json())
}

const deleteProjectOnServer = (id) => {
  return fetch(`/admin/projects/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'DELETE',
  })
  .then(res => res.json())
}

const addProjectToServer = (project) => {
  return fetch(`/admin/projects`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token')
    }),
    method: 'POST',
    body: JSON.stringify(project)
  })
  .then(res => res.json())
}

const updateProjectToServer = (project) => {
  return fetch(`/admin/projects/${project._id}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token')
    }),
    method: 'PUT',
    body: JSON.stringify(project)
  }).
  then(res => {
    if (res.status === 200) return res.json();
    throw res;
  });
}

const uploadImagePromise = () => {
  return new Promise((resolve, reject) => {
    fileUploader.pick({
      accept: ['image/*'],
      transformOptions: {
        maxDimensions: [600,400],
        transformations: { crop: true, sepia: true }
      },
      preferLinkOverStore: true,
      onFileUploadProgress: (file, progressEvent) => {
        console.log(JSON.stringify(progressEvent))
      },
      onFileUploadFinished: file => {
        console.log(file + ' has been succesfully uploaded.')
      }
    })
    .then(result => {
      const imageUrl = result.filesUploaded[0].url;
      console.log(JSON.stringify(imageUrl));
      resolve(imageUrl)
    })
  });
}

// Saga Functions
function* getProjects () {
  try {
    const projects = yield call(fetchProjects);
    yield put(getProjectsSuccess(projects));
  } catch (err) {
    yield put(getProjectsFail());
  }
}

function* getProject (action) {
  const { id } = action;
  try {
    const project = yield call(fetchProject, id);
    yield put(getProjectSuccess(project));
    yield put(push('admin/projects/edit'));
  } catch (err) {
    yield put(getProjectFail());
  }
}

function* deleteProject (action) {
  const { id } = action;
  const projects = yield select(selectedProjects);
  try {
    yield call(deleteProjectOnServer, id);
    yield put(deleteProjectSuccess(projects.filter(project => project._id !== id)));
  } catch (err) {
    // if (err.status === 403) yield put(logout);
    // yield put(deleteProjectFail());
    // localStorage.removeItem('token');
  }
}

function* addProject () {
  const project_pic = yield select(selectedImage);
  const project = yield select(projectForm);
  const newProject = Object.assign({}, { project_pic }, project.values);
  try {
    const result = yield call(addProjectToServer, newProject);
    yield put(addProjectSuccess());
    //yield put(push('admin/projects'));
  } catch (err) {
    // if (err.status === 403) yield put(logout);
    // yield put(addProjectFail());
    // localStorage.removeItem('token');
  }
}

function* updateProject () {
  const project = yield select(projectForm);
  const project_pic = yield select(selectedImage);
  const updatedProject = Object.assign({}, {project_pic}, project.values);

  try {
    yield call(updateProjectToServer, updatedProject)
    yield put(updateProjectSuccess());
    yield put(push('admin/projects'));
  } catch (err) {
    yield put(updateProjectFail());
    localStorage.removeItem('token');
  }
}

function* uploadImage () {
  try {
    const url = yield call(uploadImagePromise);
    yield put(uploadImageSuccess(url));
  } catch (err) {
    yield put(uploadImageFail());
  }
}

// Saga Watchers
function* watchGetProjects () {
  yield takeLatest(GET_PROJECTS, getProjects);
}

function* watchGetProject () {
  yield takeLatest(GET_PROJECT, getProject);
}

function* watchDeleteProject () {
  yield takeLatest(DELETE_PROJECT, deleteProject);
}

function* watchAddProject () {
  yield takeLatest(ADD_PROJECT, addProject);
}

function* watchUpdateProject () {
  yield takeLatest(UPDATE_PROJECT, updateProject);
}

function* watchUploadImage () {
  yield takeLatest(UPLOAD_IMAGE, uploadImage);
}

export {
  watchGetProjects,
  watchGetProject,
  watchDeleteProject,
  watchAddProject,
  watchUpdateProject,
  watchUploadImage
}
