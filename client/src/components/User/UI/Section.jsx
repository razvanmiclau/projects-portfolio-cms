import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toJS from 'immutable-to-js';
import Immutable from 'immutable';

import Project from './Project';
import ProjectModal from './ProjectModal';
import ProjectList from './ProjectList';
import * as projectActionCreators from '../../../actions/projects';

class Section extends Component {
  constructor(props) {
    super(props);
    this.displaySingleProject = this.displaySingleProject.bind(this);
  }

  componentDidMount() {
    this.props.projectActions.getProjects();
  }

  displaySingleProject(index) {
    this.props.projectActions.displayProjectDetails(this.props.projects[index]);

  }

  render() {
    let classnames = this.props.classnames;
    const { projects, selectedProject } = this.props;
    if (this.props.type === 'content')
      return (
        <section id={this.props.id} className={classnames}>
          <div className="content">
            <h1>{this.props.title}</h1>
            <p className="major">
              {this.props.textContent}
            </p>
          </div>
          <div className="image">
            <img src={this.props.image} />
          </div>
        </section>
      )
    else
      return (
        <section id={this.props.id} className={classnames}>
          <div className="inner">
            <h2>{this.props.title}</h2>
            <p>{this.props.textContent}</p>
          </div>
          <ProjectModal project={selectedProject} />
          <ProjectList projects={projects} displaySingleProject={this.displaySingleProject} />
        </section>
      )
  }
};

function mapStateToProps (state) {
  return {
    projects: toJS(state.getIn(['projects', 'list'], Immutable.List())),
    selectedProject: toJS(state.getIn(['projects', 'selectedProject'], Immutable.List()))
  }
};

function mapDispatchToProps (dispatch) {
  return {
    projectActions: bindActionCreators(projectActionCreators, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
