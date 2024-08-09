const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")

// const API =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metic`
// const img_url =`https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const getweather = async(city) => {
    weather.innerHTML = `<h2> Loading... </h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // const img_url =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const response = await fetch(url);
   const data = await response.json()
   return showweather(data)
}

const showweather = (data) =>{
  if(data.cod == "404"){
    weather.innerHTML = `<h2> city not found </h2>`
    return;
  }
weather.innerHTML = `
 <div>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
<h2>${data.main.temp} C </h2>
<h3> ${data.weather[0].main}</h3>
</div>`
}

form.addEventListener(
    "submit",
    function(event) {
        getweather(search.value);
        event.preventDefault();

    }
)