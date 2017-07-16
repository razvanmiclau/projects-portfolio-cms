import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class AdminContainer extends PureComponent {
  render() {
    return(
      <div className="container">
        <div className="text-center">
          <h1>AdminContainer here...</h1>
          <p className="lead">Click on the browse to start selecting your projects from the list</p>
        </div>
      </div>

    )
  }
};
