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

{/* <Project
  title="Classroom Clicker Ruby"
  description="This is a classroom clicker web application built in Ruby-on-Rails framework."
  image="https://source.unsplash.com/category/technology/1600x900" />
<Project
  title="Logo Design"
  description="This is a Logo Design built in Photoshop."
  image="https://source.unsplash.com/category/food/1600x900" />
<Project
  title="Battleships Game"
  description="This is a battleships application built in Java."
  image="https://source.unsplash.com/category/nature/1600x900" />
<Project
  title="Android App"
  description="This is a Android Mobile App built in Android Studio."
  image="https://source.unsplash.com/category/buildings/1600x900" /> */}
