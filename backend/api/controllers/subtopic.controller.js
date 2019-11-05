var mongoose = require('mongoose');
var Subtopic = mongoose.model('Subtopic');

module.exports.newSubtopic = (req, res) => {
  var newSubtopic = new Subtopic(req.body);

  newSubtopic.save((err, subtopic) => {
    if (err) {
      res.send(err);
    }
    res.json(subtopic);
  });
};

module.exports.allSubtopics = (req, res) => {
  Subtopic.find({}, (err, subtopic) => {
    if (err) {
      res.send(err);
    }
    res.json(subtopic);
  });
};

module.exports.fetchSubtopic = (req, res) => {
  console.log(req.params.subtopic);
  Subtopic.findOne({id: req.params.subtopic}, (err, subtopic) => {
    if (err) {
      res.send(err);
    }
    res.json(subtopic);
  });
}

module.exports.updateSubtopic = (req, res) => {
  Subtopic.findOneAndUpdate({id: req.params.subtopic}, req.body, {new: true}, (err, subtopic) => {
    if (err) {
      res.send(err);
    }
    res.json(subtopic);
  });
}
