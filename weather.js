let weather = {

    "apiKey": "b19eb2a5bb22325c1119eeb10a7cf6b2",
    fetchWeather: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey


        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {name} = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in "  + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        

    },

    search: function() {
       this.fetchWeather(document.querySelector(".search-bar").value);
    }

   


};



document
.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();

});

document
.querySelector(".search button")
.addEventListener("keyup", function(event) {
    if ( event.key == "Enter") {
        weather.search();
    }
});





// const locationIcon = document.querySelector(".location-icon")
// const tempElement = document.querySelector(".temperature-value p")
// const descElement = document.querySelector(".temperature-description p")
// const locationElement = document.querySelector(".location p")
// const notificationElement = document.querySelector(".notification")


// var input= document.getElementById("searchcity")
// let city =""
// let latitude= 0.0
// let longitude= 0.0


// input.addEventListener("keyup" , function(event){

//     if(event.keycode ===13){
//             event.preventDefault();

//         city=input.value
//         getSearchWeather(city)
//         console.log(city)




//     }
// })


// const weather ={}
// weather.temperature ={
//     unit: "celsius"


// }

// const KELVIN =273

// const key='b19eb2a5bb22325c1119eeb10a7cf6b2'

// if("geolocation" in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError )
// }
//     else{
//         notificationElement.style.display = 'block'
//         notificationElement.innerHTML = '<p> Browser does not support geolocation </p>'
// }

// function setPosition(position){

//     latitude =position.coords.latitude
//     longitude =position.coords.longitude

//     getWeather(latitude, longitude)

// }


// locationIcon.addEventListener("click", function(event){
//     console.log('hey')
//     getWeather(latitude, longitude)
// })

// function showError(error){

//     notificationElement.style.display="block"
//     notificationElement.innerHTML=`<p> ${error.message}</p>`


// }

// function getSearchWeather(city) {

//     let api= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`


//     fetch(api)
//     .then(function (response) {

//         let data= response.json()
//           return data


//     })

//     .then(function( data){
//         weather.temperature.value=Math.floor(data.main.temp -KELVIN)
//         weather.description=data.weather[0].description
//         weather.city= data.name
//         weather.country= data.sys.country
//     })

//     .then(function() {
//         displayWeather()
//     })
// }

// function getWeather(latitude, longitude){

//     let api=`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`




// fetch(api)
//     .then(function (response) {

//         let data= response.json()
//         return data


//     })

//     .then(function(data){
//         weather.temperature.value=Math.floor(data.main.temp -KELVIN)
//         weather.description=data.weather[0].description
//         weather.city= data.name
//         weather.country= data.sys.country
//     })

//     .then(function() {
//         displayWeather()
//     })
// }

// function displayWeather(){
//     tempElement.innerHTML=`${weather.temperature.value} *<span>C</span>`
//     descElement.innerHTML=weather.description
//     locationElement.innerHTML=`${weather.city}, ${weather.country}`
// }


