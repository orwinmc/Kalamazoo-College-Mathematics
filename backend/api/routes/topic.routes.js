module.exports = function(app) {
  var topic = require('../controllers/topic.controller.js');

  app.route('/topics')
    .post(topic.newTopic)
    .get(topic.allTopics);


  app.route('/topics/:topic')
    .get(topic.fetchTopic)
    .put(topic.updateTopic);
};
