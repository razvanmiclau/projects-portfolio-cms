import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toJS from 'immutable-to-js';
import Immutable from 'immutable';

import ProjectList from '../UI/ProjectList';
import * as projectActionCreators from '../../../actions/projects';


class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteProject = this.deleteProject.bind(this);
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.props.projectActions.getProjects();
  }

  deleteProject(id) {
    this.props.projectActions.deleteProject(id);
  }

  render() {
    const { projects } = this.props;
    return(
      <div className="test">
        <section className="banner style1
          orient-left content-align-center
          image-position-right fullscreen
          onload-image-fade-in onload-content-fade-right">
          <div className="content">
            <h1>Projects.</h1>
            <p className="major">
              Add / Edit / Search Projects.
            </p>
            <ul className="actions horizontal">
              <li><Link to='/admin/projects/add' className="button">New Project</Link></li>
              <li><a href="#second" className="button big wide smooth-scroll-middle">Projects</a></li>
            </ul>
          </div>
          <div className="image">
            <img src="https://source.unsplash.com/category/nature/1600x900" />
          </div>
        </section>

        <section id="first" className="wrapper style1">
          {this.props.children}
        </section>

        <div id="second">
          <ProjectList
            projects={projects}
            deleteProject={this.deleteProject}
          />
        </div>

      </div>
    )
  }
};

function mapStateToProps (state) {
  return {
    projects: toJS(state.getIn(['projects', 'list'], Immutable.List())),
    searchBar: state.getIn(['projects', 'searchBar'], ''),
  }
};

function mapDispatchToProps (dispatch) {
  return {
    projectActions: bindActionCreators(projectActionCreators, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
