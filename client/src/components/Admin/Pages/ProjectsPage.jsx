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
    this.editProject = this.editProject.bind(this);
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

  editProject(id) {
    this.props.projectActions.getProject(id);
  }

  render() {
    const { projects } = this.props;
    return(
      <div id="wrapper" className="divided">
        <section className="banner onload-image-fade-in onload-content-fade-right style2
        fullscreen orient-center content-align-center image-position-center">
          <div className="content">
            <h1>Projects</h1>
            <p className="major">
              Add / Edit / Search Projects.
            </p>
            <ul className="actions horizontal">
              <li><Link to='/admin/projects/add' className="button">New Project</Link></li>
              <li><a href="#second" className="button big wide smooth-scroll-middle">Projects</a></li>
            </ul>
            {this.props.children}
          </div>
          <div className="image">
            <img src="https://source.unsplash.com/category/nature/1600x900" />
          </div>
        </section>

        <div id="second">
          <ProjectList
            projects={projects}
            deleteProject={this.deleteProject}
            editProject={this.editProject}
          />
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
