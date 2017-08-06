import React, { Component } from 'react';
import filestack from 'filestack-js';

import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectsActionCreators from '../../actions/projects';

import toJS from 'immutable-to-js';
import Immutable from 'immutable';

import FormProject from './Forms/FormProject';
const fileUploader = filestack.init("At2eWk3cXTt2E43Ypq9iXz");

class EditProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.projectActions.updateProject();
  }

  uploadImage(e) {
    e.preventDefault();
    this.props.projectActions.uploadImage();
  }

  render() {
    const { image, selectedProject } = this.props;
    return(
      <div>
        <h1>Edit Project</h1>
        <FormProject
          handleSubmit={this.submit}
          image={image}
          uploadImage={this.uploadImage}
          initialValues={selectedProject.length !== 0 ? selectedProject : null} />
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    image: state.getIn(['projects', 'url'], ''),
    selectedProject: state.getIn(['projects', 'selectedProject'], '')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    projectActions: bindActionCreators(projectsActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectContainer);
