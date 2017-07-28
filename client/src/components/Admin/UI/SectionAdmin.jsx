import React, { PureComponent } from 'react';

export default class SectionAdmin extends PureComponent {
  render() {
    const { classnames, _id, section_title, section_type, section_desc, section_pic, deleteSection, editSection } = this.props;
    return(
      <section className={classnames}>
        <div className="content">
          <h1>{section_title}</h1>
          <p className="major">
            {section_desc}
          </p>
          <button onClick={() => deleteSection(_id)}>Delete</button>
          <button onClick={() => editSection(_id)}>Edit</button>
        </div>
        <div className="image">
          <img src={section_pic} />
        </div>
      </section>
    )
  }
}
