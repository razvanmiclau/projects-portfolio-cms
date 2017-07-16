import React, { Component } from 'react';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: []
    }
  }

  componentWillMount() {
    this.setState({stack: this.props.project_stack[0].split(",")});
  }

  render() {
    const { _id, index, project_name, project_desc, project_pic, project_stack, deleteProject } = this.props;
    return(
      <section className="spotlight style1 orient-right image-position-right onload-image-fade-in onload-content-fade-right">
        <div className="content">
          <h3>{project_name}</h3>
          <p>{project_desc}</p>
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
              <button className="button special small" onClick={() => deleteProject(_id)}>Remove Project</button>
            </li>
          </ul>
        </div>
        <div className="image">
          <img className="img-rounded" src={project_pic} alt={project_name} />
        </div>
      </section>
    )
  }
}
