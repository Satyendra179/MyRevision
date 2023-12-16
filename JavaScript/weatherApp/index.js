//af2a7c233c087af41c46b5640133a796 
//https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=af2a7c233c087af41c46b5640133a796
//




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

// const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af2a7c233c087af41c46b5640133a796`

let appendData = (data)=>{
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
}