const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
	}
};
const getWeather = async(city)=>{
	cityName.innerHtml = `city`
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city'= + ${city}, options)
	const response = await fetch(url);
	const data = await response.json()
	return showweather(data)
}
const showweather = (data) =>{
	if(data.cod == "404"){
	  weather.innerHTML = `<h2> city not found </h2>`
	  return;
	}
	temp.innerHTML = `
   <div>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  </div>
  <div>
  <h2>${data.main.temp} C </h2>
  <h3> ${data.weather[0].main}</h3>
  </div>`
  }
		.catch(err => console.error(err));


form.addEventListener(
    "submit",
    function(event) {
        getweather(city.value);
        event.preventDefault();
})

getWeather("Delhi")




