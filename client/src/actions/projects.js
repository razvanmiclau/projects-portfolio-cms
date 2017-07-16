// Import Constants
import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  EDIT_PROJECT,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAIL,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  SEARCH_QUERY,
  DISPLAY_PROJECT_DETAILS
} from '../constants/projects';

// GET_PROJECTS dispatch the fetchProjects function to retrieve projects from server.
const getProjects = () => {
  return {
    type: GET_PROJECTS
  }
}

/* GET_PROJECTS_SUCCESS dispatch after fetchProjects
 * adds a new state to the store.
*/
const getProjectsSuccess = (projects) => {
  return {
    type: GET_PROJECTS_SUCCESS,
    projects
  }
}

/* GET_PROJECTS_FAIL dispatch after fetchProjects
 * failure actions should the fetchProjects function fail.
*/
const getProjectsFail = () => {
  return {
    type: GET_PROJECTS_FAIL
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
  deleteProject,
  deleteProjectSuccess,
  deleteProjectFail,
  addProject,
  addProjectSuccess,
  addProjectFail,
  uploadImage,
  uploadImageSuccess,
  uploadImageFail,
  searchQuery,
  displayProjectDetails
};
