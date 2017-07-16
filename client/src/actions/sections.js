import {
GET_SECTIONS,
GET_SECTIONS_SUCCESS,
GET_SECTIONS_FAIL,
DELETE_SECTION,
DELETE_SECTION_SUCCESS,
DELETE_SECTION_FAIL,
ADD_SECTION,
ADD_SECTION_SUCCESS,
ADD_SECTION_FAIL,
UPLOAD_IMAGE,
UPLOAD_IMAGE_SUCCESS,
UPLOAD_IMAGE_FAIL,
} from '../constants/sections';

const getSections = () => {
  return {
    type: GET_SECTIONS
  }
}

const getSectionsSuccess = (sections) => {
  return {
    type: GET_SECTIONS_SUCCESS,
    sections
  }
}

const getSectionsFail = () => {
  return {
    type: GET_SECTIONS_FAIL
  }
}

const deleteSection = (id) => {
  return {
    type: DELETE_SECTION,
    id
  }
}

const deleteSectionSuccess = (sections) => {
  return {
    type: DELETE_SECTION_SUCCESS,
    sections
  }
}

const deleteSectionFail = () => {
  return {
    type: DELETE_SECTION_FAIL
  }
}

const addSection = () => {
  return {
    type: ADD_SECTION
  }
}

const addSectionSuccess = () => {
  return {
    type: ADD_SECTION_SUCCESS
  }
}

const addSectionFail = () => {
  return {
    type: ADD_SECTION_FAIL
  }
}

const uploadImage = () => {
  return {
    type: UPLOAD_IMAGE
  }
}

const uploadImageSuccess = (url) => {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
    url
  }
}

const uploadImageFail = () => {
  return {
    type: UPLOAD_IMAGE_FAIL
  }
}

export {
  getSections,
  getSectionsSuccess,
  getSectionsFail,
  deleteSection,
  deleteSectionSuccess,
  deleteSectionFail,
  addSection,
  addSectionSuccess,
  addSectionFail,
  uploadImage,
  uploadImageSuccess,
  uploadImageFail,
};
