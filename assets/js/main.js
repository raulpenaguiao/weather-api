const buttonHTML = document.querySelector("button");
const inputHTML = document.querySelector("input");

function fetchWeatherCity(city){
    let url = "https://goweather.herokuapp.com/weather/{"+ city +"}";
    console.log("Trying to connect to " + url);
    fetch(url)
    .then(res => res.json())
    .then(data=>{
        console.log(data);
    })
    .catch(err =>{
        console.log('error obtained: ' + err );
    })
}
fetchWeatherCity("Chicago")

buttonHTML.addEventListener('click', () =>{
    console.log(inputHTML.value)
    fetchWeatherCity(inputHTML.value)
});