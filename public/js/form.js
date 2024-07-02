function getQueryParams() {
    var params = {};
    var queryString = window.location.search.substring(1);
    var queries = queryString.split("&");
    for (var i = 0; i < queries.length; i++) {
        var pair = queries[i].split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return params;
}

// Get the query parameters
var params = getQueryParams();

// Display the car name and price
var carDetailsDiv = document.getElementById('car-details');
carDetailsDiv.innerHTML = 
    '<p>Car Name: ' + params.name + 
    '</p><p>Price: Rp ' + params.price + ' /hari</p>' + 
    '<p>Fuel: ' + params.fuel + '</p>' + 
    '<img src="' + params.image + '"</p>';

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px",
        cursor.style.top = e.clientY + "px";
});