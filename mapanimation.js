let counter = 0;
let marker;

//creating the map in JS to disaply

const map = new mapboxgl.Map({
container: 'map', // what element to place map in
style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
center: [-122.450429, 48.786886], // starting position [lng, lat]
zoom: 10 // starting zoom
});   

const apiKey = 'c45b1ba77356472eae4f28c91d4b61c4';

async function VehiclePositions(){
    const url = 'https://api.ridewta.com/vehicles';
    const response = await fetch(url);
    const json     = await response.json();
    return json;
}

async function experiment(){
  let response = await VehiclePositions();
  let busIndexCoordinates = [response.vehicles[66].lng,response.vehicles[66].lat];
  
  if(counter < 1){
    marker = new mapboxgl.Marker().setLngLat([busIndexCoordinates[0], busIndexCoordinates[1]]).addTo(map);
  }
  else{
    moveMarker(busIndexCoordinates);
  }
  counter++
  setTimeout(experiment, 2500);
}


function moveMarker(busLocations){

    marker.setLngLat(busLocations);

}

experiment();
//Bus #0 coordinates: 48.786886 and -122.450429