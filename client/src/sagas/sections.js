import { takeLatest, delay } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  GET_SECTIONS,
  DELETE_SECTION,
  ADD_SECTION,
  UPLOAD_IMAGE
} from '../constants/sections';

import {
  getSectionsSuccess,
  getSectionsFail,
  deleteSectionSuccess,
  deleteSectionFail,
  addSectionSuccess,
  addSectionFail,
  uploadImageSuccess,
  uploadImageFail
} from '../actions/sections';

import { logout } from '../actions/auth';

import filestack from 'filestack-js';
const fileUploader = filestack.init("At2eWk3cXTt2E43Ypq9iXz");

const selectedSections = (state) => {
  return state.getIn(['sections', 'list']).toJS();
}

const selectedImage = (state) => {
  return state.getIn(['sections', 'url'], '');
}

const sectionForm = (state) => {
  return state.getIn(['form', 'section']).toJS();
}

const fetchSections = () => {
  return fetch(`/admin/sections/`, {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => res.json())
}

const deleteSectionOnServer = (id) => {
  return fetch(`/admin/sections/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token')
    }),
    method: 'DELETE',
  })
  .then(res => res.json())
}

const addSectionToServer = (section) => {
  return fetch(`/admin/sections`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token')
    }),
    method: 'POST',
    body: JSON.stringify(section)
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

function* getSections () {
  try {
    const sections = yield call(fetchSections);
    yield put(getSectionsSuccess(sections));
  } catch (err) {
    yield put(getSectionsFail());
  }
}

function* deleteSection (action) {
  const { id } = action;
  const sections = yield select(selectedSections);
  try {
    yield call(deleteSectionOnServer, id);
    yield put(deleteSectionSuccess(sections.filter(section => section._id !== id)));
  } catch (err) {
    if (err.status === 403) yield put(logout);
    yield put(deleteSectionFail());
    localStorage.removeItem('token');
  }
}

function* addSection () {
  const section = yield select(sectionForm);
  const section_pic = yield select(selectedImage);
  const newSection = Object.assign({}, { section_pic }, section.values);
  try {
    const result = yield call(addSectionToServer, newSection);
    yield put(addSectionSuccess());
    yield put(push('admin/sections'));
  } catch (err) {
    if (err.status === 403) yield put(logout);
    yield put(addSectionFail());
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

// Sagas Watchers
function* watchGetSections () {
  yield takeLatest(GET_SECTIONS, getSections);
}

function* watchDeleteSection () {
  yield takeLatest(DELETE_SECTION, deleteSection);
}

function* watchAddSection () {
  yield takeLatest(ADD_SECTION, addSection);
}

function* watchUploadImageSection () {
  yield takeLatest(UPLOAD_IMAGE, uploadImage);
}

export {
  watchGetSections,
  watchDeleteSection,
  watchAddSection,
  watchUploadImageSection
}
