import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Project from './Project';

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
    const { projects, displaySingleProject } = this.props;

    return (
      <div className="gallery style1 medium lightbox onscroll-fade-in">
        {
          projects.map((project, index) => {
            return <Project {...project} key={project._id} index={index} displaySingleProject={displaySingleProject} />
          })
        }
      </div>
    )
  }
}

// {
//   projects.map(project => {
//     return <Project {...project} key={project._id} />
//   })
// }

// {
//     projects
//   .filter(project => project.project_name.toLowerCase())
//   .map((project, index) => {
//     return(
//       <Project {...project}
//         key={project._id}
//         index={index}
//         deleteProject={deleteProject}
//       />
//     )
//   })
// }
