import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Banner extends PureComponent {

  render() {
    return (
      <section className="banner style1
        orient-left content-align-center
        image-position-right fullscreen
        onload-image-fade-in onload-content-fade-right">
        <div className="content">
          <h1>Hello! I'm Razvan.</h1>
          <p className="major">
            Welcome to my website.
          </p>
          <ul className="actions horizontal">
            <li><a href="#first" className="button big wide smooth-scroll-middle">About Me</a></li>
            <li><a href="#second" className="button big wide smooth-scroll-middle">Projects</a></li>
          </ul>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/category/nature/1600x900" />
        </div>
      </section>
    )
  }
};
