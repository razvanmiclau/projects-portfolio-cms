import React, { PureComponent } from 'react';

export default class ProjectModal extends PureComponent {

  render() {
    const { _id, project_name, project_desc, project_pic, project_stack } = this.props.project;
    return(
      <div className="modal fade" id="project-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <img src={project_pic} className="img-responsive img-big" />
            <div className="modal-body">
              <header>
                <h3>{project_name}</h3>
                Link: <a href="#">http://github.com</a>
              </header>
              <p className="align-left">{project_desc} - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <hr/>
              <div className="stack-list list-inline">
                <h3>Stack Used</h3>
                {project_stack}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

{/* <div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-body">
      <div>
        <img src={project_pic} className="img-responsive img-big" />
      </div>
      <p>
        {project_desc}
      </p>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
    </div>
  </div>
</div> */}
