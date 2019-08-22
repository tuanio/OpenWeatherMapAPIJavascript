// http://www.openweathermap.org/data/2.5/forecast?id=1566083&appid=b6907d289e10d714a6e88b30761fae22
// var KEY  = "e635e6a8c683f448b994a6e254567aa7";

let data;
let r = new XMLHttpRequest();

r.onreadystatechange = data => { // fat anoynymous function using =>
    if (r.readyState == 4 || r.Status == 200) {
        data = JSON.parse(r.responseText);
        
        let country = document.getElementById("country");


        country.innerHTML = "Location: " + data.city.name + ", " + data.city.country;
        country.style.fontFamily = "arial";
        country.style.fontWeight = "bold";

        for(var i = 1; i <= 5; i++){
            document.getElementById("img" + i).innerHTML = data.list[(i-1)*8].dt_txt;

            document.getElementById("text" + i).innerHTML = data.list[(i-1)*8].weather[0].main;

            document.getElementById("temp" + i).innerHTML = data.list[(i-1)*8].main.temp + "°C";

            document.getElementById("img" + 1).style.width = "80px";
        
            document.getElementById("img"+ i).src = "http://openweathermap.org/img/w/" + data.list[(i-1)*8].weather[0].icon + ".png";
            document.getElementById("text"+ i).src = "http://openweathermap.org/img/w/" + data.list[(i-1)*8].weather[0].icon + ".png";
            document.getElementById("date"+ i).src = "http://openweathermap.org/img/w/" + data.list[(i-1)*8].weather[0].icon + ".png";
            document.getElementById("temp"+ i).src = "http://openweathermap.org/img/w/" + data.list[(i-1)*8].weather[0].icon + ".png";
        }
    

    }
}
// 1591449 bắc ninh
// 1581130 hà nội
// 1566083 tp.hcm
r.open("GET", "http://www.openweathermap.org/data/2.5/forecast?id=1591449&appid=b6907d289e10d714a6e88b30761fae22", true);
r.send();