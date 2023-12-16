//Apikey{af2a7c233c087af41c46b5640133a796}
//https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=af2a7c233c087af41c46b5640133a796
//src="https://maps.google.com/maps?q=raebareli&t=&z=13&ie=UTF8&iwloc=&output=embed"




let getData = ()=>{
    let city = document.getElementById("city").value;
    // console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af2a7c233c087af41c46b5640133a796`
    fetch(url)
    .then(function(res){
        // console.log(res);
        return res.json();
    })
    .then(function(res){
        console.log(res);
        appendData(res);
    })
    .catch(function(err){
        console.log(err)
    });
     
    // console.log("hello")
}
function getDataLocation(lat,lon){
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=af2a7c233c087af41c46b5640133a796 `
    fetch(url)
    .then(function(res){
        // console.log(res);
        return res.json();
    })
    .then(function(res){
        console.log(res);
        appendData(res);
    })
    .catch(function(err){
        console.log(err)
    });
}

// const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af2a7c233c087af41c46b5640133a796`

let appendData = (data)=>{
    let map = document.getElementById("gmap_canvas");
    
    let container = document.getElementById('container');
    container.innerHTML=null;
    let city = document.createElement('p');
    city.innerText = "CITY         : "+data.name;

    let min = document.createElement('p');
    min.innerText="MIN TEMP        : "+Math.round(Number(data.main.temp_min)-273)+"°C";

    let max = document.createElement('p');
    max.innerText= "MAX TEMP       : " +Math.round(Number(data.main.temp_max)-273)+"°C";

    let current = document.createElement('p');
    current.innerText="CURRENT TEMP      : " +Math.round( Number(data.main.temp)-273)+"°C";

    let feel = document.createElement('p');
    feel.innerText="FEELS LIKE      : " +Math.round( Number(data.main.feels_like)-273)+"°C";

    let humidity = document.createElement('p');
    humidity.innerText="HUMIDITY        : "+ data.main.humidity+"%";
    container.append(city,min,max,feel,humidity);
    map.src= `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    container.classList.remove('hide');
}




function getWeather(){
    navigator.geolocation.getCurrentPosition(success);
    function success(position){
        let crd = position.coords;
        console.log("your current position is:");
        console.log(`Latitute :${crd.latitude}`);
        console.log(`longitude: ${crd.longitude}`);
        console.log(`Mpre or less : ${crd.accuracy} maters.`)

        getDataLocation(crd.latitude, crd.longitude);
    }
    
}