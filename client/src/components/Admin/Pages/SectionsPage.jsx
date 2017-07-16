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

  render() {
    const { sections } = this.props;
    
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>New Section</h1>
          <Link to='/admin/sections/add' className="button">Add Section</Link>
          {this.props.children}
        </div>

        <div>
          <header>
            <h2>Sections</h2> <hr/>
          </header>
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
  }
};

function mapDispatchToProps (dispatch) {
  return {
    sectionActions: bindActionCreators(sectionActionCreators, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsContainer);
