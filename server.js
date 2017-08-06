var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

// Models
import Project from './models/project';
import Section from './models/section';
// Routes
import { getProjects, getProject, postProject, deleteProject, updateProject } from './client/routes/project';
import { getSections, getSection, addSection, deleteSection, updateSection } from './client/routes/section';
// Authentication
import { signup, login, checkAuth } from './client/routes/user';

// DB URI
const DB_URI = 'mongodb://razvanmc:capsuniM1923@ds157500.mlab.com:57500/personalweb_db';

var app = express();
app.set('port', (process.env.PORT || 5000));

// DB connection
mongoose.Promise = global.Promise;
mongoose.connect(DB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

// Enforce HTTPS over HTTP
// app.use((req, res, next) => {
//   if (req.headers['x-forwarded-proto'] === 'https') {
//     res.redirect('http://' + req.hostname + req.url);
//   } else {
//     next();
//   }
// });

// Body Parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Where to find static assets
app.use(express.static(__dirname + '/public'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});

// Routes
app.route('/admin/projects')
   .post(checkAuth, postProject)
   .get(getProjects);
app.route('/admin/projects/:id')
   .get(getProject)
   .put(checkAuth, updateProject)
   .delete(deleteProject);

app.route('/admin/sections')
   .post(checkAuth, addSection)
   .get(getSections);
app.route('/admin/sections/:id')
   .get(getSection)
   .put(checkAuth, updateSection)
   .delete(checkAuth, deleteSection);

app.post('/authenticate/login', login);
app.post('/authenticate/signup', signup);

app.route("*").get(function(req, res){
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port ', app.get('port'));
});
