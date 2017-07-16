var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var projectSchema = new mongoose.Schema(
  {
    project_name: String,
    project_desc: String,
    project_pic: String,
    project_stack: [String],
    project_date: {
      type: Date,
      default: Date.now
    }
  }
);

export default mongoose.model('Project', projectSchema);
