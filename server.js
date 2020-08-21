/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('Weather-Journal-App2'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

app.get('/all', sendData)

function sendData (req, res) {
  res.send(projectData);
};

app.post('/add', callBack);

function callBack(req, res) {
  res.send('POST received');
};

const data = [];

app.post('/postData', postData);

function postData(req, res) {
  data.push(req.body);
};


