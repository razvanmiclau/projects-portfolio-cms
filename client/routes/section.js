import Section from '../../models/section';

// Get all most recent projects
const getSections = (req, res) => {
  Section.find(null, null,
    (err, sections) => {
      if (err) {
        res.send(err);
      }
      res.json(sections);
    },
  );
};

// Get a single project by ID
const getSection = (req, res) => {
  const { id } = req.params;
  // Query the db for selected project.
  Section.findById(id, (err, section) => {
    if (err) {
      res.send(err);
    }
    res.json(section);
  });
};

// Get the body data and create a new Project
const addSection = (req, res) => {
  let section = Object.assign(new Section(), req.body);
  section.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Section Added'})
  });
};

// Delete a Project
const deleteSection = (req, res) => {
  Section.remove({_id: req.params.id }, err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Section successfully removed'})
  });
};

export { getSections, getSection, addSection, deleteSection };
