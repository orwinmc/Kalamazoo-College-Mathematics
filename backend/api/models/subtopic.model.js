const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SubtopicSchema = new Schema({
    id: String,
    name: String,
    summary: String,
    problems: [String],
    image: String
});

module.exports = mongoose.model('Subtopic', SubtopicSchema);
