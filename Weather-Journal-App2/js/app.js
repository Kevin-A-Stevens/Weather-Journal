/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?'
// let apiKey = '&appid=9fe283a5194cb33e8da39dbddb884ba33';
let apiKey = '9fe283a5194cb33e8da39dbddb884ba33';


// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const zipCode = document.getElementById('zip').value;
    getWeatherData(baseURL, zipCode, apiKey)
}

const getWeatherData = async(baseURL, zipCode, apiKey) => {
    const feelings = document.getElementById('feelings').value;
    getWeatherData(baseURL,zipCode,apiKey)
    .then(function(data) {
        console.log(data);
        postData('/postData',data)
    }).then(function() {
        UpdateUI();
    })
};


const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.error("error", error);
    }
};

const GetWeather = async (baseURL, zipCode, apiKey) => {
    const res = await fetch(baseURL+zipCode+apiKey);
    try {
        const data = await res.json();
        console.log(data);
        return data;
        // We can do something else with our returned data here
      } catch(error) {
        console.error("error", error);
      }
    }

    const UpdateUI = async () => {
        const request = await fetch('/all')
        try {
          const allData = await request.json()
          console.log(allData);
          document.getElementById('date').innerHTML = 'Date: ' + allData.d;
          document.getElementById('temp').innerHTML = 'Temperature: ' + allData.temperature;
          document.getElementById('feelsLike').innerHTML = 'Comment: ' + allData.feeling;
          document.getElementById('humidity').innerHTML = 'Humidity: ' + allData.humidity;
          document.getElementById('windSpeed').innerHTML = 'Wind Speed: ' + allData.windSpeed;
          document.getElementById('tzName').innerHTML = 'Time Zone: ' + allData.tzName;
          document.getElementById('content').innerHTML = 'Description: ' + allData.description;
        }catch(error) {
          console.log("error", error)
        }
      }


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



