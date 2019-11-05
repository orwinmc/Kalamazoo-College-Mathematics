module.exports = function(app) {
  var subtopic = require('../controllers/subtopic.controller.js');

  app.route('/subtopics')
    .post(subtopic.newSubtopic)
    .get(subtopic.allSubtopics);

  app.route('/subtopics/:subtopic')
    .get(subtopic.fetchSubtopic)
    .put(subtopic.updateSubtopic);
};
