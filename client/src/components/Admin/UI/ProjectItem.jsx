import React, { Component } from 'react';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: []
    }
  }

  componentWillMount() {
    if (this.props.project_stack.length !== 0) {
      this.setState({stack: this.props.project_stack[0].split(",")});
    }
  }

  render() {
    const { _id, index, project_name, project_desc, project_pic, project_stack, project_link, deleteProject, editProject } = this.props;
    const linkStyle = {
      color: '#fff',
      textDecoration: 'none'
    }

    return(
      <section className="spotlight style1 orient-right image-position-right onload-image-fade-in onload-content-fade-right">
        <div className="content">
          <h3>{project_name}</h3>
          <p className="major">{project_desc}</p>
          <div className="stack">
            <h4>Stack</h4>
            <ul className="list-inline">
              {
                this.state.stack.map((skill,index) => {
                  return <li><span key={index} className="label label-default">{skill}</span></li>
                })
              }
            </ul>
          </div>

          <ul className="actions small">
            <li>
              <button className="button special small" onClick={() => editProject(_id)}>Edit Project</button>
            </li>
            <li>
              <button className="button special small" onClick={() => deleteProject(_id)}>Remove Project</button>
            </li>

            { project_link ?
              <li>
                <button className="button special small">
                  <a style={linkStyle} href={project_link}>View Project</a>
                </button>
              </li> :
              null
            }

          </ul>
        </div>
        <div className="image">
          <img className="img-rounded" src={project_pic} alt={project_name} />
        </div>
      </section>
    )
  }
}
