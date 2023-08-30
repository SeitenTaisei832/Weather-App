
const getWeather = async (city) => {
	
	cityName.innerHTML = city;
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': 'c9ee31a19fmsh0526c3ac4ae9446p1e078ejsn630c98a122e1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json(); 
	  console.log(result);
  

	  cloud_pct.innerHTML = result.cloud_pct;
	  temp.innerHTML = result.temp;
	  feels_like.innerHTML = result.feels_like;
	  humidity.innerHTML = result.humidity;
	  min_temp.innerHTML = result.min_temp;
	  max_temp.innerHTML = result.max_temp;
	  wind_speed.innerHTML = result.wind_speed;
	  wind_degrees.innerHTML = result.wind_degrees;
	  sunrise.innerHTML = result.sunrise;
	  sunset.innerHTML = result.sunset;
	} catch (error) {
	  console.error(error);
	}
  };
  
  submit.addEventListener('click', (e) => {
	e.preventDefault()
	getWeather(cityInput.value);
  });
  
  getWeather('Indore');
  
  const getWeatherd = async (delhi) => {
	
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': 'c9ee31a19fmsh0526c3ac4ae9446p1e078ejsn630c98a122e1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json(); 
	  console.log(result);
  
	
	  dcloud_pct.innerHTML = result.cloud_pct;
	  dtemp.innerHTML = result.temp;
	  dfeels_like.innerHTML = result.feels_like;
	} catch (error) {
	  console.error(error);
	}
  };
  const getWeatherk = async (kolkata) => {
	
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': 'c9ee31a19fmsh0526c3ac4ae9446p1e078ejsn630c98a122e1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json(); 
	  console.log(result);
  

	  kcloud_pct.innerHTML = result.cloud_pct;
	  ktemp.innerHTML = result.temp;
	  kfeels_like.innerHTML = result.feels_like;

	} catch (error) {
	  console.error(error);
	}
  };
  const getWeatherb = async (Bangalore) => {
	
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': 'c9ee31a19fmsh0526c3ac4ae9446p1e078ejsn630c98a122e1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json(); // Parse the JSON response
	  console.log(result);
  
	  // Update HTML elements with fetched values
	  bcloud_pct.innerHTML = result.cloud_pct;
	  btemp.innerHTML = result.temp;
	  bfeels_like.innerHTML = result.feels_like;
	} catch (error) {
	  console.error(error);
	}
  };
  getWeatherd();
  getWeatherb();
  getWeatherk();
  