$(document).ready(function(){
    $.ajax({
        type: "POST",
        url: "http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=55d193b8cc97a9dfba634b0c0297f27a&units=metric",
        dataType: "json",
        success:function (result, status, xhr) {

            var locationContect = $(

                "<h1 id='city'>" + result["name"] + " <img src='https://www.countryflags.io/" + result["sys"]["country"] + "</h1>" 
                
            );

            $("#location").html(locationContect);

            var temperature = $(
                "<br><span class='h1' id='temp'>" + result["main"]["temp"] + " °C</span>" +
                "<br><span class='h5 lead' id='feeltemp'>feels: " + result["main"]["feels_like"] + " °C</span>" + "</p>"

            );

            $("#temp").html(temperature);

        },
        error: function (result, status, error){
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
    });
});