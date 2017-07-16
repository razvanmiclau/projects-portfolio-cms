import Project from '../../models/project';

// Get all most recent projects
const getProjects = (req, res) => {
  Project.find(null, null,
    { sort: { project_date : 1} },
    (err, projects) => {
      if (err) {
        res.send(err);
      }
      res.json(projects);
    },
  );
};

// Get a single project by ID
const getProject = (req, res) => {
  const { id } = req.params;
  // Query the db for selected project.
  Project.findById(id, (err, project) => {
    if (err) {
      res.send(err);
    }
    res.json(project);
  });
};

// Get the body data and create a new Project
const postProject = (req, res) => {
  let project = Object.assign(new Project(), req.body);
  project.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Project Added'})
  });
};

// Delete a Project
const deleteProject = (req, res) => {
  Project.remove({_id: req.params.id }, err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Project successfully removed'})
  });
};

export { getProjects, getProject, postProject, deleteProject };
