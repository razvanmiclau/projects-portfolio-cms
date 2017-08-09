import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Section from './UI/Section';
import SectionUI from './UI/SectionUI';
import Banner from './UI/Banner';
import Footer from './UI/Footer';

// Redux, Immutable, sectionActionCreators
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toJS from 'immutable-to-js';
import Immutable from 'immutable';
import * as sectionActionCreators from '../../actions/sections';


class HomeContainer extends PureComponent {

  componentWillMount() {
    this.fetchSections();
  }

  fetchSections() {
    this.props.sectionActions.getSections();
  }

  render() {
    const { sections } = this.props;
    const getProjectSectionID = () => {
      const sectionID = this.props.sections.length;
      let id = '';
        switch (sectionID) {
          case 0: { id = 'first'; break; }
          case 1: { id = 'second'; break; }
          case 2: { id = 'third'; break; }
          case 3: { id = 'fourth'; break; }
        }
      return id;
    }

    return(
      <div id="wrapper" className="divider">
        <Banner />

        {
          sections.map((section, index) => {

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

            switch (index) {
              case 0: { index = "first"; break; }
              case 1: { index = "second"; break; }
              case 2: { index = "third"; break; }
              case 3: { index = "fourth"; break; }
            }

            return <SectionUI index={index} {...section} key={section._id} classnames={classnames} />
          })
        }

        <Section id={getProjectSectionID()} type="projects" title="Projects" textContent="This is my list of projects. I developed these applications during my time at university."
        classnames="wrapper style1 align-center" />

        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

//
// <Section id="first" type="content" title="About Me" textContent="Hello there. I'm a computer science graduate from King's College London. I developed web apps my entire life.
//   I am very proeficient in Javascript | Node.JS | React."
//   classnames="spotlight color1 invert style1 orient-right content-align-left image-position-center"
//   image="https://source.unsplash.com/category/people/1600x900" />
