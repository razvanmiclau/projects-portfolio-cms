import { takeLatest, delay } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  GET_PROJECTS,
  DELETE_PROJECT,
  ADD_PROJECT,
  UPLOAD_IMAGE
} from '../constants/projects';
import {
  getProjectsSuccess,
  getProjectsFail,
  deleteProjectSuccess,
  deleteProjectFail,
  addProjectSuccess,
  addProjectFail,
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

function* watchDeleteProject () {
  yield takeLatest(DELETE_PROJECT, deleteProject);
}

function* watchAddProject () {
  yield takeLatest(ADD_PROJECT, addProject);
}

function* watchUpdateProject () {
  yield takeLatest(EDIT_PROJECT, updatedProject);
}

function* watchUploadImage () {
  yield takeLatest(UPLOAD_IMAGE, uploadImage);
}

export {
  watchGetProjects,
  watchDeleteProject,
  watchAddProject,
  watchUploadImage
}
