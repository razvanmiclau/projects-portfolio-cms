import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Project extends PureComponent {

  render() {
    const { _id, index, project_name, project_desc, project_pic,} = this.props;

    return (
      <article>
        <a href="#" className="image">
          <img src={project_pic} alt={project_name} />
        </a>
        <div className="caption">
          <h3>{project_name}</h3>
          <p>{project_desc}</p>
          <ul className="actions">
            <li><span className="button small">Details</span></li>
          </ul>
        </div>
      </article>
    )
  }
};
{/* <article>
  <a href="#" className="image">
    <img src={this.props.image} alt={this.props.title} />
  </a>
  <div className="caption">
    <h3>{this.props.title}</h3>
    <p>{this.props.description}</p>
    <ul className="actions">
      <li><span className="button small">Details</span></li>
    </ul>
  </div>
</article> */}
