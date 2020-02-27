function initMap() {
	// add your code here
  L.mapquest.key='HL3Sams3scPSaCHS0yikfLDrP3VeLASA';

  var map = L.mapquest.map('map', {
    center: [32.88, -117.236],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  //add marker to map
  L.marker([32.88, -117.236]).addTo(map)
}
