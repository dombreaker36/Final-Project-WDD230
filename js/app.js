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



const requestjson = 'https://dombreaker36.github.io/Final-Project-WDD230/data.json'

const myCards = document.querySelector('.card')

fetch(requestjson)
.then((res)=>{
  return res.json()
}
)
.then ((jsonObject)=>{
  const temples = jsonObject["temples"]

  temples.forEach(displayResult)
})

const displayResult = (temple)=>{
  const box1 = document.createElement('div');
  box1.classList.add('box-1')

  const templeTitle = document.createElement('h1');
  templeTitle.textContent = `${temple.templeName}`

  const templeImg = document.createElement('img')
  templeImg.setAttribute('src', temple.imgUrl);
  templeImg.setAttribute('alt', `portrait of ${temple.templeName}`)
  templeImg.setAttribute('loading', 'lazy');

  const address = document.createElement('p')
  address.textContent = `Address: ${temple.address}`

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = `Telephone: ${temple.Telephone}`

  const email = document.createElement('p')
  email.textContent = `Email: ${temple.Email}`
// Services Div
  const serviceDiv = document.createElement('div')
  serviceDiv.classList.add('services')

  const servicebtn = document.createElement('button')
  servicebtn.className = "servicebtn"
  servicebtn.innerHTML = '<button>Services</button>'

  const serviceList = document.createElement('ul')
  serviceList.classList.add('servicelist')

  const serviceItem_1 = document.createElement('li')
  serviceItem_1.textContent = `${temple.service1}`
  const serviceItem_2 = document.createElement('li')
  serviceItem_2.textContent = `${temple.service2}`
  const serviceItem_3 = document.createElement('li')
  serviceItem_3.textContent = `${temple.service3}`
  const serviceItem_4 = document.createElement('li')
  serviceItem_4.textContent = `${temple.service4}`

  serviceList.appendChild(serviceItem_1)
  serviceList.appendChild(serviceItem_2)
  serviceList.appendChild(serviceItem_3)
  serviceList.appendChild(serviceItem_4)

  serviceDiv.appendChild(servicebtn)
  serviceDiv.appendChild(serviceList)
  
  // History Div
  const historyDiv = document.createElement('div')
  historyDiv.classList.add('history')

  const historybtn = document.createElement('button')
  historybtn.className = "hstry"
  historybtn.innerHTML = '<button>History</button>'
  

  const historyList = document.createElement('ul')
  historyList.classList.add('historyList')

  const historyItem_1 = document.createElement('li')
  historyItem_1 .textContent = `${temple.history1}`
  const historyItem_2 = document.createElement('li')
  historyItem_2.textContent = `${temple.history2}`
  const historyItem_3 = document.createElement('li')
  historyItem_3.textContent = `${temple.history3}`
  const historyItem_4 = document.createElement('li')
  historyItem_4.textContent = `${temple.history4}`

  historyList.appendChild(historyItem_1)
  historyList.appendChild(historyItem_2)
  historyList.appendChild(historyItem_3)
  historyList.appendChild(historyItem_4)

  historyDiv.appendChild(historybtn)
  historyDiv.appendChild(historyList)

  // Closure Div
  const closureDiv = document.createElement('div')
  closureDiv.classList.add('history')

  const closurebtn = document.createElement('button')
  closurebtn.className = "tempcl"
  closurebtn.innerHTML = '<button>Temple Closure</button>'

  const closureList = document.createElement('ul')
  closureList.classList.add('historyList')

  const closureItem_1 = document.createElement('li')
  closureItem_1 .textContent = `${temple.closure1}`
  const closureItem_2 = document.createElement('li')
  closureItem_2.textContent = `${temple.closure2}`
  const closureItem_3 = document.createElement('li')
  closureItem_3.textContent = `${temple.closure3}`
  const closureItem_4 = document.createElement('li')
  closureItem_4.textContent = `${temple.closure4}`

  closureList.appendChild(closureItem_1)
  closureList.appendChild(closureItem_2)
  closureList.appendChild(closureItem_3)
  closureList.appendChild(closureItem_4)

  // closureDiv.appendChild(closurebtn)
  closureDiv.appendChild(closurebtn)
  closureDiv.appendChild(closureList)

  function toggleService() {

    serviceList.classList.toggle("open")
  };
  
  function toggleHistory() {
  
    historyList.classList.toggle("open")
  };
  
  function toggleClosure() {
  
    closureList.classList.toggle("open")
  };

  
  servicebtn.onclick = toggleService;
  historybtn.onclick = toggleHistory;
  closurebtn.onclick = toggleClosure;
  
  const like = document.createElement('p')
  const likeBtn = document.createElement('button')
  likeBtn.className = 'likebtn'
  likeBtn.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
  const display = document.createElement('span')
  display.className = "likeDisplay"
  like.appendChild(display)
 like.appendChild(likeBtn)

  // const likeDisplay = document.querySelector(".likeDisplay")

  let numlikes = Number(localStorage.getItem("like-ls"))



  likeBtn.addEventListener('click', ()=>{
    numlikes ++
    localStorage.setItem('likes-ls', numlikes)
    display.textContent = numlikes
  })



  box1.appendChild(templeTitle)
  box1.appendChild(templeImg)
  box1.appendChild(address)
  box1.appendChild(phoneNumber)
  box1.appendChild(email)
  box1.appendChild(serviceDiv)
  box1.appendChild(historyDiv)
  box1.appendChild(closureDiv)
  box1.appendChild(like)

  myCards.appendChild(box1)
}


const button = document.querySelector('.hamburger')
const navigation = document.querySelector('.navul')
function togglenav() {
  navigation.classList.toggle("open")
};

button.onclick = togglenav;

var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.querySelector('.current-date').innerHTML = ` Last Modification: ${date} ${time}`



