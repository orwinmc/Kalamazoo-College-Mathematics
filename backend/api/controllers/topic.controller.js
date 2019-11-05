var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports.newTopic = (req, res) => {
  var newTopic = new Topic(req.body);

  newTopic.save((err, topic) => {
    if (err) {
      res.send(err);
    }
    res.json(topic);
  });
};

module.exports.allTopics = (req, res) => {
  Topic.find({}, (err, topic) => {
    if (err) {
      res.send(err);
    }
    res.json(topic);
  });
};

module.exports.fetchTopic = (req, res) => {
  Topic.findOne({id: req.params.topic}, (err, topic) => {
    if (err) {
      res.send(err);
    }
    res.json(topic);
  });
}

module.exports.updateTopic = (req, res) => {
  Topic.findOneAndUpdate({id: req.params.topic}, req.body, {new: true}, (err, topic) => {
    if (err) {
      res.send(err);
    }
    res.json(topic);
  });
}
