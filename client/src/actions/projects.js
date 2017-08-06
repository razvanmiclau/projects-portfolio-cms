// Import Constants
import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  UPDATE_PROJECT,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  SEARCH_QUERY,
  DISPLAY_PROJECT_DETAILS
} from '../constants/projects';

const getProjects = () => {
  return {
    type: GET_PROJECTS
  }
}

const getProjectsSuccess = (projects) => {
  return {
    type: GET_PROJECTS_SUCCESS,
    projects
  }
}

const getProjectsFail = () => {
  return {
    type: GET_PROJECTS_FAIL
  }
}

const getProject = (id) => {
  return {
    type: GET_PROJECT,
    id
  }
}

const getProjectSuccess = (project) => {
  return {
    type: GET_PROJECT_SUCCESS,
    project
  }
}

const getProjectFail = () => {
  return {
    type: GET_PROJECT_FAIL
  }
}

const deleteProject = (id) => {
  return {
    type: DELETE_PROJECT,
    id
  }
}

const deleteProjectSuccess = (projects) => {
  return {
    type: DELETE_PROJECT_SUCCESS,
    projects
  }
}

const deleteProjectFail = () => {
  return {
    type: DELETE_PROJECT_FAIL
  }
}

const addProject = () => {
  return {
    type: ADD_PROJECT
  }
}

const addProjectSuccess = () => {
  return {
    type: ADD_PROJECT_SUCCESS
  }
}

const addProjectFail = () => {
  return {
    type: ADD_PROJECT_FAIL
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

const searchQuery = (keyword) => {
  return {
    type: SEARCH_QUERY,
    keyword
  }
}

const updateProject = () => {
  return {
    type: UPDATE_PROJECT
  }
}

const updateProjectSuccess = (project) => {
  return {
    type: UPDATE_PROJECT_SUCCESS,
    project
  }
}

const updateProjectFail = () => {
  return {
    type: UPDATE_PROJECT_FAIL
  }
}

const displayProjectDetails = (project) => {
  return {
    type: DISPLAY_PROJECT_DETAILS,
    project
  }
}

export {
  getProjects,
  getProjectsSuccess,
  getProjectsFail,
  getProject,
  getProjectSuccess,
  getProjectFail,
  deleteProject,
  deleteProjectSuccess,
  deleteProjectFail,
  addProject,
  addProjectSuccess,
  addProjectFail,
  updateProject,
  updateProjectSuccess,
  updateProjectFail,
  uploadImage,
  uploadImageSuccess,
  uploadImageFail,
  searchQuery,
  displayProjectDetails
};
