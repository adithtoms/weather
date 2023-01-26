const timedisplay = document.querySelector('#time')
const screen = document.querySelector('#screen')


function showtime() {
    today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    return (time)
}
timedisplay.innerHTML = showtime()


function search() {
    city = place.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080`)
    .then(data=>data.json()).then(item=>displays(item));
}

function displays(data) {
cname=data.name;
temp=((data.main.temp)-273.15).toFixed(2);
type=data.weather[0].main
icon=data.weather[0].icon
feels=((data.main.feels_like)-273.15).toFixed(2);
mintemp=((data.main.temp_min)-273.15).toFixed(2);
maxtemp=((data.main.temp_max)-273.15).toFixed(2);
visibility=data.visibility/1000;
wind=data.wind.speed;
pressure=data.main.pressure;
humidity=data.main.humidity;
console.log(cname,temp,type,feels,mintemp,maxtemp,wind,pressure,humidity,visibility);

screen.innerHTML=`<div style="font-size:30px">${cname}</div><div style="margin-top:20px;display:flex"><div style="  width: 50%;
border-right: 4px solid rgb(212, 129, 13);
font-size: 40px;
font-weight: 800;
text-align: center;
padding: 10px;">${temp}<span style="font-size:30px"> &deg;C</span></div>
<div style="  width: 50%;
display: flex;
flex-direction: column;
gap:15px;
text-align: center;
padding: 15px;"><div style="font-size: 25px;
font-weight: 500;">${type}</div><div><strong>Feels Like:</strong>${feels}</div></div></div>
<div style=" 
display: flex;
text-align: center;
margin-top:40px;
"><div style="padding: 15px; width: 50%;
border-bottom: 1px solid rgb(212, 129, 13);
font-weight: 500;"><strong>Visibility:</strong><br>${visibility} km</div>
<div style="padding: 15px; width: 50%;border-bottom: 1px solid rgb(212, 129, 13);
font-weight: 500;" ><strong>Humidity:</strong><br>${humidity}%</div></div>
<div style=" 
display: flex;
text-align: center;
"><div style="padding: 15px; width: 50%;
font-weight: 500;"><strong>Wind:</strong><br>${wind} km/hr</div>
<div style="padding: 15px; width: 50%;
font-weight: 500;" ><strong>Pressure:</strong><br>${pressure}mb</div></div>`



}
