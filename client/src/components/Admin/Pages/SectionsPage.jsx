import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toJS from 'immutable-to-js';
import Immutable from 'immutable';

import * as sectionActionCreators from '../../../actions/sections';
import SectionAdmin from '../UI/SectionAdmin';

class SectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteSection = this.deleteSection.bind(this);
    this.editSection = this.editSection.bind(this);
  }

  componentDidMount() {
    this.fetchSections();
  }

  fetchSections() {
    this.props.sectionActions.getSections();
  }

  deleteSection(id) {
    this.props.sectionActions.deleteSection(id);
  }

  editSection(id) {
    this.props.sectionActions.getSection(id);
  }

  render() {
    const { sections, selectedSection } = this.props;

    return(
      <div id="wrapper" className="divided">
        <section className="banner onload-image-fade-in onload-content-fade-right style2
        fullscreen orient-center content-align-center image-position-center">
          <div className="content">
            <h1>Sections</h1>
            <p className="major">
              <Link to='/admin/sections/add' className="button">Add Section</Link>
            </p>
            {this.props.children}
          </div>
          <div className="image">
            <img src="https://source.unsplash.com/category/nature/1600x900" />
          </div>
        </section>

        <div id="wrapper">
          {
            sections.map(section => {

              const classnames = [
              section.section_type,
              section.section_style,
              section.section_orientation,
              section.section_content_alignment,
              section.section_image_alignment,
              section.section_image_animation,
              section.section_content_animation,
              section.section_color,
              ].join(" ");

              return (
                <SectionAdmin {...section}
                  key={section._id}
                  classnames={classnames}
                  editSection={this.editSection}
                  deleteSection={this.deleteSection}/>
              )
            })
          }
        </div>
        <footer className="wrapper style1 align-center">
          <div className="inner">
            <ul className="icons">
              <li><a href="#" className="icon style2 fa fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon style2 fa fa-linkedin"><span className="label">Linkedin</span></a></li>
              <li><a href="#" className="icon style2 fa fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <p>&copy; Razvan Miclau. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
          </div>
        </footer>
      </div>

    )
  }
};

function mapStateToProps (state) {
  return {
    sections: toJS(state.getIn(['sections', 'list'], Immutable.List())),
    selectedSection: toJS(state.getIn(['selectedSection'], Immutable.List()))
  }
};

function mapDispatchToProps (dispatch) {
  return {
    sectionActions: bindActionCreators(sectionActionCreators, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsContainer);
