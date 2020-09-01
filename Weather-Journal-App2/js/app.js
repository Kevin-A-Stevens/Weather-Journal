/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=********************************';

// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeatherData(baseURL, zipCode, apiKey)
    .then(function(data) {
        postData('/add', {
            // temperature: temperature,
            date: d,
            feelings: feelings,
            humidity: humidity,
            windSpeed: windSpeed,
            // tzName: timezone,
            description: content
        });
        UpdateUI('/');
    })
};

/* GET Web API data */
const getWeatherData = async(baseURL, zipCode, apiKey) => {
    const response = await fetch(baseURL + zipCode + apiKey);
    try {
        const data = await response.json();
        return data;
    } catch(error) {
        console.error('error', error);
    };
};

/* POST Web API data*/
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.error("error", error);
    };
};

/* UpdateUI function */
const UpdateUI = async (url='') => {
    const res = await fetch(url);
    try {
        const allData = await res.json();
        document.getElementById('date').innerHTML = allData[0].d;
        document.getElementById('temp').innerHTML = allData[0].temperature;
        document.getElementById('feelsLike').innerHTML = allData[0].feelslike;
        document.getElementById('humidity').innerHTML = allData[0].humidity;
        document.getElementById('windSpeed').innerHTML = allData[0].windSpeed;
        document.getElementById('tzName').innerHTML = allData[0].tzName;
        document.getElementById('content').innerHTML = allData[0].description;
      } catch(error) {
        console.error("error", error);
      };
    };


/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */

// The following is taken from the Weather site data.

// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

// {
//     "coord": {"lon": -122.08,"lat": 37.39},
//     "weather": [
//       {
//         "id": 800,
//         "main": "Clear",
//         "description": "clear sky",
//         "icon": "01d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 282.55,
//       "feels_like": 281.86,
//       "temp_min": 280.37,
//       "temp_max": 284.26,
//       "pressure": 1023,
//       "humidity": 100
//     },
//     "visibility": 16093,
//     "wind": {
//       "speed": 1.5,
//       "deg": 350
//     },
//     "clouds": {
//       "all": 1
//     },
//     "dt": 1560350645,
//     "sys": {
//       "type": 1,
//       "id": 5122,
//       "message": 0.0139,
//       "country": "US",
//       "sunrise": 1560343627,
//       "sunset": 1560396563
//     },
//     "timezone": -25200,
//     "id": 420006353,
//     "name": "Mountain View",
//     "cod": 200
//   }



