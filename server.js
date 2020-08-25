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


app.post('/database', (req, res) => {
  const { temp, currentTime } = req.body.main;
  const returnedcurrentDate = currentTime;
  const returnedTemp = `${temp}°C`;
  const feelings = feelsLike;
  const humidity = humidity;
  const windSpeed = windSpeed;
  const timeZone = tzName;
  const content = description;
  
  projectData.data.push({
    currentDate: returnedcurrentDate,
    temperature: returnedTemp,
    feelsLike: feelings,
    humidity: humidity,
    windSpeed: windSpeed,
    timeZone: timeZone,
    content: content,
  });

  res.send(projectData);
});

app.get('/all', (req, res) => {
  res.send(projectData);
});



