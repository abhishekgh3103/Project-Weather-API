const locInput = document.querySelector('#location');
const btn = document.querySelector('button');
const outputDiv = document.querySelector('.outputDiv');


async function foreCast(loc) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=49bb4d4ea7a0416d89c133755241601&q=${loc}&aqi=yes`,{mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData.current.condition.text);
    console.log(weatherData);
    console.log(weatherData.current.condition.icon);
    const outputContent = document.createElement('div');
    outputContent.classList.add('outputContent');
    const img = document.createElement('img');
    const weatherText = document.createElement('p')
    img.src = `https:${weatherData.current.condition.icon}`;
    weatherText.textContent = weatherData.current.condition.text;
    outputContent.appendChild(img);
    outputContent.appendChild(weatherText);
    outputDiv.appendChild(outputContent);
}



function cityName(){
    console.log(locInput.value);
    return locInput.value;
}
let cityLoc = btn.addEventListener('click', () => {
    let loc = cityName();
    foreCast(loc);
});