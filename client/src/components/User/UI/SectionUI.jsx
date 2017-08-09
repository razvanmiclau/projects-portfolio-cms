import React, { PureComponent } from 'react';

export default class SectionUI extends PureComponent {

  render() {
    const { classnames, _id, index, section_title, section_type, section_desc, section_pic } = this.props;

    if (section_type === 'wrapper') {
      return (
        <section id={index} className={classnames}>
          <div className="inner">
            <h2>{section_title}</h2>
            <p className="pre-wrap">{section_desc}</p>
          </div>
        </section>
      )
    } else {
      return (
        <section id={index} className={classnames}>
          <div className="content">
            <h1>{section_title}</h1>
            <p className="major">
              {section_desc}
            </p>
          </div>
          <div className="image">
            <img src={section_pic} />
          </div>
        </section>
      )
    }
  }
}
