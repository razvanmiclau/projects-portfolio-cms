import React, { PureComponent } from 'react';

export default class SectionAdmin extends PureComponent {
  render() {
    const { classnames, _id, section_title, section_type, section_desc, section_pic, deleteSection, editSection } = this.props;
    if (section_type === 'wrapper') {
      return (
        <section className={classnames}>
          <div className="inner">
            <h2>{section_title}</h2>
            <p className="pre-wrap">{section_desc}</p>
            <ul className="actions fit">
              <li><button className="button special fit" onClick={() => editSection(_id)}>Edit</button></li>
              <li><button className="button fit" onClick={() => deleteSection(_id)}>Delete</button></li>
            </ul>
          </div>
        </section>
      )
    } else {
      return(
        <section className={classnames}>
          <div className="content">
            <h1>{section_title}</h1>
            <p className="major">
              {section_desc}
            </p>
            <ul className="actions fit">
              <li><button className="button special fit" onClick={() => editSection(_id)}>Edit</button></li>
              <li><button className="button fit" onClick={() => deleteSection(_id)}>Delete</button></li>
            </ul>
          </div>
          <div className="image">
            <img src={section_pic} />
          </div>
        </section>
      )
    }
  }
}
