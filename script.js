// http://www.openweathermap.org/data/2.5/forecast?id=1566083&appid=b6907d289e10d714a6e88b30761fae22
// var KEY  = "e635e6a8c683f448b994a6e254567aa7";

var data;
var r = new XMLHttpRequest();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatDate(dateString) {
    var dateArr = dateString.split("-");
    return dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0]; 
}

r.onreadystatechange = data => { // fat anoynymous function using =>
    if (r.readyState == 4 || r.Status == 200) {
        data = JSON.parse(r.responseText);
        
        var country = document.getElementById("country");


        country.innerHTML = "Location: " + data.city.name + ", " + data.city.country;
        country.style.fontFamily = "arial";
        country.style.fontWeight = "bold";

        for(var i = 1; i <= 5; i++){
            document.getElementById("img"+ i).src = "http://openweathermap.org/img/w/" + data.list[(i-1)*8].weather[0].icon + ".png";
            document.getElementById("img" + i).style.width = "80px";


            document.getElementById("text_description" + i).innerHTML = capitalizeFirstLetter(data.list[(i-1)*8].weather[0].description);

            document.getElementById("text" + i).innerHTML = data.list[(i-1)*8].weather[0].main;

            document.getElementById("temp" + i).innerHTML = data.list[(i-1)*8].main.temp + "°C";

            document.getElementById("date" + i).innerHTML = formatDate(data.list[(i-1)*8].dt_txt.substring(0, 10));
        
            document.getElementById("humidity" + i).innerHTML = data.list[(i-1) * 8].main.humidity + "%";
        }
    

    }
}
    

var place = document.getElementById("txt_place");
var commit_place = document.getElementById("commit_place");

commit_place.addEventListener("click", function() {
    r.open("GET", "http://www.openweathermap.org/data/2.5/forecast?id=" + place.value + "&appid=b6907d289e10d714a6e88b30761fae22", true);
    r.send();
    for (var i = 0; i <= 5; i++) {
        document.getElementsByClassName("span_hum")[i].innerHTML = "Humidity: "
    }
});
// 1591449 bắc ninh
// 1581130 hà nội
// 1566083 tp.hcm
// r.open("GET", "http://www.openweathermap.org/data/2.5/forecast?id=" + place.value + "&appid=b6907d289e10d714a6e88b30761fae22", true);

