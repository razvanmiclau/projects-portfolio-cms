import React, { Component } from 'react';
import filestack from 'filestack-js';

import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sectionsActionCreators from '../../actions/sections';

import toJS from 'immutable-to-js';
import Immutable from 'immutable';

import FormSection from './Forms/FormSection';
const fileUploader = filestack.init("At2eWk3cXTt2E43Ypq9iXz");

class EditSectionContainer extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.sectionActions.updateSection();
  }

  uploadImage(e) {
    e.preventDefault();
    this.props.sectionActions.uploadImage();
  }

  render() {
    const { image, selectedSection } = this.props;
    return(
      <div>
        <h1>Content & Layout</h1>
        <FormSection
          handleSubmit={this.submit}
          image={image}
          uploadImage={this.uploadImage}
          initialValues={selectedSection.length !== 0 ? selectedSection : null} />
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    image: state.getIn(['sections', 'url'], ''),
    selectedSection: state.getIn(['sections', 'selectedSection'], '')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sectionActions: bindActionCreators(sectionsActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSectionContainer);
