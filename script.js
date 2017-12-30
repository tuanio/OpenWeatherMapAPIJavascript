// http://www.openweathermap.org/data/2.5/forecast?id=1566083&appid=b6907d289e10d714a6e88b30761fae22
// var KEY  = "e635e6a8c683f448b994a6e254567aa7";

let data;
let r = new XMLHttpRequest();

r.onreadystatechange = data => { // fat anoynymous function using =>
    if (r.readyState == 4 || r.Status == 200) {
        data = JSON.parse(r.responseText);
        
        let country = document.getElementById("country");

        let img1 = document.getElementById("img1");
        let text1 = document.getElementById("text1");
        let date1 = document.getElementById("date1");
        let temp1 = document.getElementById("temp1");

        let img2 = document.getElementById("img2");
        let text2 = document.getElementById("text2");
        let date2 = document.getElementById("date2");
        let temp2 = document.getElementById("temp2");

        let img3 = document.getElementById("img3");
        let text3 = document.getElementById("text3");
        let date3 = document.getElementById("date3");
        let temp3 = document.getElementById("temp3");

        let img4 = document.getElementById("img4");
        let text4 = document.getElementById("text4");
        let date4 = document.getElementById("date4");
        let temp4 = document.getElementById("temp4");

        let img5 = document.getElementById("img5");
        let text5 = document.getElementById("text5");
        let date5 = document.getElementById("date5");
        let temp5 = document.getElementById("temp5");

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
// 1591449 bắc ninh
// 1581130 hà nội
// 1566083 tp.hcm
r.open("GET", "http://www.openweathermap.org/data/2.5/forecast?id=1591449&appid=b6907d289e10d714a6e88b30761fae22", true);
r.send();