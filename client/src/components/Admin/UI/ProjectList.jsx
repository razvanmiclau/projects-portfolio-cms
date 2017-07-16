import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Project from './ProjectItem';

const headers = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

export default class ProjectList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { projects, deleteProject } = this.props;

    return (
      <div>
        {
            projects
          .filter(project => project.project_name.toLowerCase())
          .map((project, index) => {
            return(
              <Project {...project}
                key={project._id}
                index={index}
                deleteProject={deleteProject}
              />
            )
          })
        }
      </div>

    )
  }
}
