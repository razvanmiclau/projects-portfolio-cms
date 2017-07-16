import React, { Component } from 'react';
import filestack from 'filestack-js';

import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sectionsActionCreators from '../../actions/sections';

import FormSection from './Forms/FormSection';
const fileUploader = filestack.init("At2eWk3cXTt2E43Ypq9iXz");


class AddSectionContainer extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.sectionActions.addSection();
  }

  uploadImage(e) {
    e.preventDefault();
    this.props.sectionActions.uploadImage();
  }

  render() {
    const { image } = this.props;

    return(
      <div>
        <h1>AddSection Container</h1>
        <FormSection handleSubmit={this.submit} image={image} uploadImage={this.uploadImage} />
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    image: state.getIn(['sections', 'url'], '')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sectionActions: bindActionCreators(sectionsActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSectionContainer);
