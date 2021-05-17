  
function initMap(){
	var locations = [
    ['Gujarat, India', 22.5518978, 72.9239577, 1],
    ['New York City, New York', 40.7128, -74.0060, 2],
    ['Shanghai, Chaina', 31.2304, 121.4737, 3],
    ['London, England', 51.5074, 0.1278, 4],
    ['Berlin, Germany', 52.5200, 13.4050, 5],
    ['Tokyo Japan', 35.6762, 139.6503, 6],
    ['Bengaluru, India', 12.9716, 77.5946, 7],
    ['New Delhi, India', 28.6139, 77.2090, 8],
    ['Los Angeles, California', 34.0522, -118.2437, 9],
    ['Sydney, Australia', -33.8688, 151.2093, 10]
  ];
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: new google.maps.LatLng(26.5824, 127.2276),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  var infowindow = new google.maps.InfoWindow();
  
  var marker, i;
  
  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });
  
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
};