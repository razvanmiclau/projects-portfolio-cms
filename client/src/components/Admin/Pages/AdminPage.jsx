import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import toJS from 'immutable-to-js';
import Immutable from 'immutable';


class AdminContainer extends PureComponent {
  render() {
    const { projects, sections } = this.props;
    return(
      <div id="wrapper" className="divider">
        <section className="banner onload-image-fade-in onload-content-fade-right style2
        fullscreen orient-center content-align-center image-position-center">
          <div className="content">
            <h1 className="text-center">Dashboard</h1>
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <div className="caption text-center">
                    <h3>Projects</h3>
                    <h1>
                      {projects.length}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <div className="caption text-center">
                    <h3>Sections</h3>
                    <h1>
                      {sections.length}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img src="https://source.unsplash.com/category/nature/1600x900" />
          </div>
        </section>
      </div>

    )
  }
};

function mapStateToProps (state) {
  return {
    projects: toJS(state.getIn(['projects', 'list'], Immutable.List())),
    sections: toJS(state.getIn(['sections', 'list'], Immutable.List()))
  }
};

export default connect(mapStateToProps, null)(AdminContainer);
