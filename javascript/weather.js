const apikey="da5bd261ca453310b15dae3d68fe1aa2";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkweather(city){
    const response=await fetch(`${apiurl}&q=${city}&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        const data=await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

        //if(data.weather[0].main=="Clouds"){
        //    weathericon.src="./assets/clouds.png"
        //}e

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }

    }
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});