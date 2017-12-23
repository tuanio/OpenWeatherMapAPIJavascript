// http://www.openweathermap.org/data/2.5/forecast?id=1566083&appid=b6907d289e10d714a6e88b30761fae22
var img1 = $("#img1");
var description1 = $("#description1");
var date1 = $("#date1");

var img2 = $("#img2");
var description2 = $("#description2");
var date2 = $("#date2");

var img3 = $("#img3");
var description3 = $("#description3");
var date3 = $("#date3");

var img4 = $("#img4");
var description4 = $("#description4");
var date4 = $("#date4");

var img5 = $("#img5");
var description5 = $("#description5");
var date5 = $("#date5");

var country = $("#country");

var r = $.ajax({
    url : "http://www.openweathermap.org/data/2.5/forecast?id=1566083&appid=b6907d289e10d714a6e88b30761fae22",
    dataType : "jsonp",
    type : "GET"
});
r.done(function(data) {
    // common between dates

    country.html("Location: " + data.city.name + ", " + data.city.country).css("font-family", "arial").css("font-weight", "bold");


    // end

    // day1 
    date1.html(data.list[0].dt_txt);
    description1.html(data.list[0].weather[0].description);
    img1.attr("src", "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon +".png").css("width", "90px");


    // end 


    // day2
    date2.html(data.list[8].dt_txt);
    description2.html(data.list[8].weather[0].description);
    img2.attr("src", "http://openweathermap.org/img/w/" + data.list[8].weather[0].icon +".png").css("width", "90px");
    // end
    
    
    
    
    // day3
    date3.html(data.list[16].dt_txt);
    description3.html(data.list[16].weather[0].description);
    img3.attr("src", "http://openweathermap.org/img/w/" + data.list[16].weather[0].icon +".png").css("width", "90px");
    // end

    // day4 
    date4.html(data.list[24].dt_txt);
    description4.html(data.list[24].weather[0].description);
    img4.attr("src", "http://openweathermap.org/img/w/" + data.list[24].weather[0].icon +".png").css("width", "90px");

    // end

    // day5 
    date5.html(data.list[32].dt_txt);
    description5.html(data.list[32].weather[0].description);
    img5.attr("src", "http://openweathermap.org/img/w/" + data.list[32].weather[0].icon +".png").css("width", "90px")
    // 
}); 