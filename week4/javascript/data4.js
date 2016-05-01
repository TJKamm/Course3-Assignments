var myMap;

function loadMap () {
  
  myMap = L.map('mapId').setView([41.3851, 2.1734], 13); 
  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxzoom: 19
    } ).addTo( myMap );
  var marker = L.marker( [ 41.4036, 2.1744 ] ); //change this
marker.bindPopup( 'La Sagrada Familia' );
marker.addTo( myMap );
}

window.onload = loadMap;

function inputData () {
  var latitudeInput = document.getElementById("latitudeInput").value;
  var longitudeInput = document.getElementById("longitudeInput").value;
  var zoomInput = document.getElementById("zoomInput").value;
  
  //var location = L.latLng(latitudeInput, longitudeInput);
  myMap.setView(new L.LatLng(latitudeInput, longitudeInput), zoomInput);
  //myMap.panTo(location);
 // myMap.setZoom(zoomInput);
}

function resetData() {
  document.getElementById("latitudeInput").innerHTML = "";
  document.getElementById("longitudeInput").innerHTML = "";
  document.getElementById("zoomInput").innerHTML = "";
}