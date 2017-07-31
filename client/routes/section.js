import Section from '../../models/section';

// Get all most recent Sections
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

// Get a single Section by ID
const getSection = (req, res) => {
  const { id } = req.params;
  // Query the db for selected Section.
  Section.findById(id, (err, section) => {
    if (err) {
      res.send(err);
    }
    res.json(section);
  });
};

// Get the body data and create a new Section
const addSection = (req, res) => {
  let section = Object.assign(new Section(), req.body);
  section.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Section Added'})
  });
};

// Update a Section
const updateSection = (req, res) => {
  const { id } = req.params;
  let updatedSection = Object.assign(new Section(), req.body);
  Section.findOneAndUpdate({_id: id}, updatedSection, (err, updatedData) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Section Updated'});
  });
};

// Delete a Section
const deleteSection = (req, res) => {
  Section.remove({_id: req.params.id }, err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Section successfully removed'})
  });
};

export { getSections, getSection, addSection, deleteSection, updateSection };
