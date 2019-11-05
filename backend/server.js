const express = require('express');
const process = require('process');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
// not sure what this does
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Connect to MongoDB Database
mongoose.connect(process.env.KZOOMATHCLUSTER_URI,
  { useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(() => console.log('\'Kalamazoo College Mathematics DB\' connection established successfully'))
    .catch(err => {
      console.log("DB Connection Error");
    }
  );

// Including Models
require('./api/models/topic.model.js');
require('./api/models/subtopic.model.js');

// Adding Routes
var topicRoutes = require('./api/routes/topic.routes.js');
topicRoutes(app);
var subtopicRoutes = require('./api/routes/subtopic.routes.js');
subtopicRoutes(app);

// Listen on Port
app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});
