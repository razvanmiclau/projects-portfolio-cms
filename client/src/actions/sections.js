import {
GET_SECTIONS,
GET_SECTIONS_SUCCESS,
GET_SECTIONS_FAIL,
GET_SECTION,
GET_SECTION_SUCCESS,
GET_SECTION_FAIL,
DELETE_SECTION,
DELETE_SECTION_SUCCESS,
DELETE_SECTION_FAIL,
ADD_SECTION,
ADD_SECTION_SUCCESS,
ADD_SECTION_FAIL,
UPDATE_SECTION,
UPDATE_SECTION_SUCCESS,
UPDATE_SECTION_FAIL,
UPLOAD_IMAGE,
UPLOAD_IMAGE_SUCCESS,
UPLOAD_IMAGE_FAIL,
} from '../constants/sections';

const getSections = () => {
  return {
    type: GET_SECTIONS
  }
}

const getSection = (id) => {
  return {
    type: GET_SECTION,
    id
  }
}

const getSectionSuccess = (section) => {
  return {
    type: GET_SECTION_SUCCESS,
    section
  }
}

const getSectionFail = () => {
  return {
    type: GET_SECTION_FAIL
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

const updateSection = () => {
  return {
    type: UPDATE_SECTION,
  }
}

const updateSectionSuccess = (section) => {
  return {
    type: UPDATE_SECTION_SUCCESS,
    section
  }
}

const updateSectionFail = () => {
  return {
    type: UPDATE_SECTION_FAIL
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
  getSection,
  getSectionSuccess,
  getSectionFail,
  deleteSection,
  deleteSectionSuccess,
  deleteSectionFail,
  addSection,
  addSectionSuccess,
  addSectionFail,
  updateSection,
  updateSectionSuccess,
  updateSectionFail,
  uploadImage,
  uploadImageSuccess,
  uploadImageFail,
};
