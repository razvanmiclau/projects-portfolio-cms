var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;
var adminSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, lowecase: true},
    password: { type: String, select: false},
    name: String
  }
);

// before saving the password, hash it.
adminSchema.pre('save', function(next) {
  var admin = this;

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(admin.password, salt, function(err, hash) {
      admin.password = hash;
      next();
    })
  })
});

// compare form password with the password stored in the database.
adminSchema.methods.comparePwd = function(password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

export default mongoose.model('Admin', adminSchema);
