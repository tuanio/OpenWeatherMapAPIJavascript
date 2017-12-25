// http://www.openweathermap.org/data/2.5/forecast?id=1566083&appid=b6907d289e10d714a6e88b30761fae22
var img1 = document.getElementById("img1");
var text1 = document.getElementById("text1");
var date1 = document.getElementById("date1");
var temp1 = document.getElementById("temp1");

var img2 = document.getElementById("img2");
var text2 = document.getElementById("text2");
var date2 = document.getElementById("date2");
var temp2 = document.getElementById("temp2");

var img3 = document.getElementById("img3");
var text3 = document.getElementById("text3");
var date3 = document.getElementById("date3");
var temp3 = document.getElementById("temp3");

var img4 = document.getElementById("img4");
var text4 = document.getElementById("text4");
var date4 = document.getElementById("date4");
var temp4 = document.getElementById("temp4");

var img5 = document.getElementById("img5");
var text5 = document.getElementById("text5");
var date5 = document.getElementById("date5");
var temp5 = document.getElementById("temp5");

var country = document.getElementById("country");

var data;
var r = new XMLHttpRequest();

r.onreadystatechange = function(data) {
    if (r.readyState == 4 || r.Status == 200) {;
        data = JSON.parse(r.responseText);
        
        country.innerHTML = "Location: " + data.city.name + ", " + data.city.country;
        country.style.fontFamily = "arial";
        country.style.fontWeight = "bold";
     
        date1.innerHTML = data.list[0].dt_txt;
        date2.innerHTML = data.list[8].dt_txt;
        date3.innerHTML = data.list[16].dt_txt;
        date4.innerHTML = data.list[24].dt_txt;
        date5.innerHTML = data.list[32].dt_txt;

        text1.innerHTML = data.list[0].weather[0].main;
        text2.innerHTML = data.list[8].weather[0].main;
        text3.innerHTML = data.list[16].weather[0].main;
        text4.innerHTML = data.list[24].weather[0].main;
        text5.innerHTML = data.list[32].weather[0].main;

        temp1.innerHTML = data.list[0].main.temp + "°C";
        temp2.innerHTML = data.list[8].main.temp + "°C";
        temp3.innerHTML = data.list[16].main.temp + "°C";
        temp4.innerHTML = data.list[24].main.temp + "°C";
        temp5.innerHTML = data.list[32].main.temp + "°C";

        img1.src = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
        img2.src = "http://openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png";
        img3.src = "http://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png";
        img4.src = "http://openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png";
        img5.src = "http://openweathermap.org/img/w/" + data.list[32].weather[0].icon + ".png";


        img1.style.width = "80px";
        img2.style.width = "80px";
        img3.style.width = "80px";
        img4.style.width = "80px";
        img5.style.width = "80px";
        


    }
}
r.open("GET", "http://www.openweathermap.org/data/2.5/forecast?id=1566083&appid=b6907d289e10d714a6e88b30761fae22", true);
r.send();
