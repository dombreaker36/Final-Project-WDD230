const currentTemp = document.querySelector('.current-temp');
const humidity = document.querySelector('.humidity');
const weather_desc = document.querySelector('.weather-desc')
const weatherIcon = document.querySelector('#weather-icon')

const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bethesda&appid=ee04980b30205f93679902b3006148dd&units=imperial'



async function apiFetch(){
  try{
    const response = await fetch(url);
  
 

    if(response.ok) {
      const data = await response.json();
  

      displayresults(data)

      console.log(data)
    }

    else{
      throw Error(await response.text());
    }
  } catch (error){
    console.log(error);
  }
}

apiFetch();

function displayresults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>&#8457;`

  humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;


  const desc = weatherData.weather[0].description;
  weather_desc.innerHTML = `Weather Description: ${desc}`
  weatherIcon.setAttribute('src', iconsrc);

  weatherIcon.setAttribute('alt', desc);
  captionDesc.textcontent = desc
}

const servicebut = document.querySelector('.servicebtn')
const historyBtn = document.querySelector('.hstry')
const closureBtn = document.querySelector('.tempcl')
const serviceList = document.querySelector('.servicelist')
const historyList = document.querySelector(".historyList")
const closureList = document.querySelector(".closureList")





function toggleService() {

  serviceList.classList.toggle("open")
};

function toggleHistory() {

  historyList.classList.toggle("open")
};

function toggleClosure() {

  closureList.classList.toggle("open")
};

servicebut.onclick = toggleService;
historyBtn.onclick = toggleHistory;
closureBtn.onclick = toggleClosure;


