const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
}

const logWeather = ({ date, weather }): void => 
{
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather)