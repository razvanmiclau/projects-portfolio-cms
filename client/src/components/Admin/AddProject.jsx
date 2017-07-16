import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import filestack from 'filestack-js';

import Form from './Forms/FormProject';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectsActionCreators from '../../actions/projects';

const fileUploader = filestack.init("At2eWk3cXTt2E43Ypq9iXz");


class AddProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false};
    this.submit = this.submit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.projectActions.addProject();
  }

  uploadImage(e) {
    e.preventDefault();
    this.props.projectActions.uploadImage();
  }

  render() {
    const { image } = this.props;
    return(
        <div className="inner medium">
          <header>
            <h1>Add New Project</h1>
          </header>
          <div className="content">
            <Form handleSubmit={this.submit} image={image} uploadImage={this.uploadImage}/>
          </div>
        </div>

    )
  }
};

function mapStateToProps(state) {
  return {
    image: state.getIn(['projects', 'url'], '')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    projectActions: bindActionCreators(projectsActionCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectContainer);
