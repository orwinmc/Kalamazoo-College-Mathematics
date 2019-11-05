const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TopicSchema = new Schema({
    id: String,
    name: String,
    summary: String,
    subtopics: [String],
    image: String
});

module.exports = mongoose.model('Topic', TopicSchema);
