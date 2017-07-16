var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var sectionSchema = new mongoose.Schema(
  {
    section_title: String,
    section_desc: String,
    section_pic: String,
    section_type: String,
    section_style: String,
    section_orientation: String,
    section_content_alignment: String,
    section_image_alignment: String,
    section_image_animation: String,
    section_content_animation: String,
    section_color: String,
  }
);

export default mongoose.model('Section', sectionSchema);
