const getWeather = async (location = 'Mowe') => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=a724f51917c1f090a2c33698937540c3`;
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}

const loadWeather = res => {
    
}

export default getWeather