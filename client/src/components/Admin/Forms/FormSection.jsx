import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form/immutable';

class FormSection extends PureComponent {

  render() {
    const { image, uploadImage, initialValues } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="field">
          <label htmlFor="section-title">Section Title</label>
          <Field
            name="section_title"
            type="text"
            component="input"
          placeholder="Section Title" />
        </div>

        <div className="field">
          <label htmlFor="section_pic">Image URL</label>
          <input type="button" value="Upload Image" onClick={uploadImage} />
        </div>

        <div className="field">
          <img src={image} id="preview" className="img-responsive img-upload" />
        </div>

        <div className="field">
          <label htmlFor="section-description">Section Description</label>
          <Field
            id="textareaField"
            name="section_desc"
            type="text"
            rows="3"
            component="textarea"
          placeholder="Section Description" />
        </div>

        <div className="field">
          <label htmlFor="section-type">Type</label>
          <div className="select-wrapper">
            <Field
              name="section_type"
            component="select">
              <option>- Select Section Type -</option>
              <option value="banner">Banner</option>
              <option value="spotlight">Spotlight</option>
              <option value="wrapper">Normal Wrapper</option>
            </Field>
          </div>
        </div>

        <div className="field">
          <label htmlFor="section-type">Style</label>
          <div className="select-wrapper">
            <Field
              name="section_style"
            component="select">
              <option>- Select Section Style -</option>
              <option value="style1">Style 1</option>
              <option value="style2">Style 2</option>
              <option value="style3">Style 3</option>
              <option value="style4">Style 4</option>
              <option value="style5">Style 5</option>
              <option value="style6">Style 6</option>
            </Field>
          </div>
        </div>

        <div className="field">
          <label htmlFor="section-type">Color</label>
          <div className="select-wrapper">
            <Field
              name="section_color"
            component="select">
              <option>- Select Section Color -</option>
              <option value="invert">Invert</option>
              <option value="invert color1">Color 1</option>
              <option value="invert color2">Color 2</option>
              <option value="invert color3">Color 3</option>
              <option value="invert color4">Color 4</option>
              <option value="invert color5">Color 5</option>
              <option value="invert color6">Color 6</option>
              <option value="invert color7">Color 7</option>
            </Field>
          </div>
        </div>

        <div className="field">
          <label htmlFor="section-type">Orientation</label>
          <div className="select-wrapper">
            <Field
              name="section_orientation"
            component="select">
              <option>- Select Section Orientation -</option>
              <option value="orient-left">Left</option>
              <option value="orient-right">Right</option>
            </Field>
          </div>
        </div>

        <div className="field">
          <label htmlFor="section-type">Content Alignment</label>
          <div className="select-wrapper">
            <Field
              name="section_content_alignment"
            component="select">
              <option>- Select Content Alignment -</option>
              <option value="content-align-left">Left</option>
              <option value="content-align-center">Center</option>
              <option value="content-align-right">Right</option>
            </Field>
          </div>
        </div>

        <div className="field">
          <label htmlFor="section-type">Image Alignment</label>
          <div className="select-wrapper">
            <Field
              name="section_image_alignment"
            component="select">
              <option>- Select Content Alignment -</option>
              <option value="image-position-left">Left</option>
              <option value="image-position-center">Center</option>
              <option value="image-position-right">Right</option>
            </Field>
          </div>
        </div>

        <div className="field">
          <h1>Animations</h1>
        </div>

        <div className="field">
          <label htmlFor="section-type">Image Animation</label>
          <div className="select-wrapper">
            <Field
              name="section_image_animation"
            component="select">
              <option>- Select Image Animation -</option>
              <option value="onload-image-fade-in">OnLoad fade In</option>
              <option value="onscroll-image-fade-in">OnScroll fade In</option>

            </Field>
          </div>
        </div>

        <div className="field">
          <label htmlFor="section-type">Content Animation</label>
          <div className="select-wrapper">
            <Field
              name="section_content_animation"
            component="select">
              <option>- Select Content Animation -</option>
              <option value="onload-content-fade-in">OnLoad fade In</option>
              <option value="onload-content-fade-up">OnLoad fade up</option>
              <option value="onload-content-fade-down">OnLoad fade down</option>
              <option value="onload-content-fade-left">OnLoad fade left</option>
              <option value="onload-content-fade-right">OnLoad fade right</option>
            </Field>
          </div>
        </div>


        <ul className="actions">
          <li>
            <input type="submit" type="submit" value="Submit Section" />
          </li>
        </ul>
      </form>
    )
  }
}

export default reduxForm({ form: 'section' })(FormSection);
