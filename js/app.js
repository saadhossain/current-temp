const loadWeather = async(cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=540c4c3b66ec4fb76f01f1ddbadbcc2d&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);
}
const displayWeather = (weather) =>{
    setValue('city', weather.name);

    setValue('temperature', weather.main.temp);

    setValue('condition', weather.weather[0].main);
    //Change bg based on weather condition
    const weatherCondition = weather.weather[0].main;
    const backgroundImage = document.getElementById('body');

    if(weatherCondition === 'Haze'){
        backgroundImage.style.backgroundImage = 'url(https://tinyurl.com/4rbbbne7)';
    }
    else if(weatherCondition === 'Clouds'){
        backgroundImage.style.backgroundImage = 'url(https://tinyurl.com/4z5ms36y)';
    }
    else if(weatherCondition === 'Rain'){
        backgroundImage.style.backgroundImage = 'url(https://tinyurl.com/2p8snv59)';
    }
    else if (weatherCondition === 'Clear'){
        backgroundImage.style.backgroundImage = 'url(https://tinyurl.com/yc3fnhv8)';
    }
    else{
        backgroundImage.style.backgroundImage = 'url(https://tinyurl.com/mr6ue4kr)';
    }
}
const setValue  = (id, value) =>{
    const getPlaceholder = document.getElementById(id);
    getPlaceholder.innerText = value; 
}

//Get the search input value
const getSearchInput = () => {
    const Input = document.getElementById('city-name');
    const Text = Input.value;
    return Text;
}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchText = getSearchInput();
    //Clear the previous search text
    document.getElementById('city-name').value = '';
    // searchInput.value = '';
    loadWeather(searchText);
})
document.getElementById('city-name').addEventListener('keypress', function(event){
    const searchText = getSearchInput();
    
    if(event.key === 'Enter'){
        //Clear the previous search text
        document.getElementById('city-name').value = '';
        loadWeather(searchText);
    }
})

loadWeather('Dhaka');
