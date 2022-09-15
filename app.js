
window.addEventListener('DOMContentLoaded', () => {
	//create elements or get get elements from html using DOM
	const cityData= document.getElementById("h1")
	const img = document.getElementById("img")
	const symbol = document.getElementById("span")
	const descr = document.getElementById("descr")
	const tempData = document.getElementById("h2")
	const degreeSection = document.getElementById("degree-section")

//geo locator
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			//lattitude and longitude
			const long = position.coords.longitude;
			const lat = position.coords.latitude;
			//fetch weather api
			fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=6fe1953bdb014422816b4034d6764a90&include=minutely
			`).then(response => response.json())
			.then(json => {
				cityData.innerHTML = json.data[0].city_name
				tempData.innerText = json.data[0].temp
				symbol.innerHTML = "C"
				descr.innerHTML = `The current weather in ${json.data[0].city_name} (where you are )is ${json.data[0].weather.description}.`
				img.src = `https://www.weatherbit.io/static/img/icons/${json.data[0].weather.icon}.png`

				//event listeners for button and temperature section
				degreeSection.addEventListener("click", first)
				function first(e) {
					tempData.innerText = ((json.data[0].temp) * 9 / 5) + 32
					span.innerHTML = "F"
					e.stopImmediatePropagation();
					document.onclick = second;
				}
				function second(e) {
					e.stopImmediatePropagation();
					document.onclick = first;
					tempData.innerText = json.data[0].temp
					symbol.innerHTML = "C"
				}
			})

		})
	}
});


