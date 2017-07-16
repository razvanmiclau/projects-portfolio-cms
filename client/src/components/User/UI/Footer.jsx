import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Footer extends PureComponent {

  render() {
    return (
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
    )
  }
};
