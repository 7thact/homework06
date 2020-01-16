// ajax call
//1st call for current weather
//2nd call for 5 day forecast
//display results
//city name, date, temperature, humidity, wind speed, uv index, and icon of weather
//save recent searches to local storage

//on click of button we make a api call
// grab the button
// add an eventListener to that button in jquary

$(document).ready(function () {
    $("#add-weather").on("click", function (e) {
        e.preventDefault();
        //get the city from the input box -- u already know the name
        var city = $("#weather-input").val()
        $("#weather-input").val('')
        console.log(city)

        callWeatherApi(city)

        //grab that ul then use the append method to add a list eleemnt w/ a child thats an a that has some text that matches the city
        $("#pastSearches").append("<li> <a href=# id=past-" + city.replace(' ', '') + "> " + city + "</a> </li>")
        $('#past-' + city.replace(' ', '')).on('click', function (e) {
            e.preventDefault();
            callWeatherApi(city)
        })
        //get a response from the api
        //transfer content to html
    })

    function callWeatherApi(city) {
        var APIKey = "f5cb90e64f2796d26b195f9ad8bf8acd"
        // api.openweathermap.org/data/2.5/forecast?q=London,us
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",US&appid=" + APIKey
        // var cityName = document.querySelector('#weather-input').value
        //use that to call the api
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response)
                // $("#seeWeather").append("<ul id='newList'></ul>")

                $("#currentInfo").empty();

                $("#currentInfo").append("<li>Temperature: " + response.list[0].main.temp + "</li>")
                // console.log(response.list[0].main.temp)
                $("#currentInfo").append("<li> Wind: " + response.list[0].wind.speed + "</li>")
                $("#currentInfo").append("<li> Humidity: " + response.list[0].main.humidity + "</li>")

                var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                $(".tempF").text("Temperature (Kelvin) " + tempF);
            })

    }

})
//extract all required data from respone and put the in their own variables
//use jquary to manipulate current elements and put them on the screen
//put newly created elements on the screen



