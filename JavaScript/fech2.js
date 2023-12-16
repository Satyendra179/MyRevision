//af2a7c233c087af41c46b5640133a796 
//https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=af2a7c233c087af41c46b5640133a796
//

let city=document.getElementById('city').value;

let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af2a7c233c087af41c46b5640133a796`

fetch(url)
.then(function(res){
    console.log(res);
})