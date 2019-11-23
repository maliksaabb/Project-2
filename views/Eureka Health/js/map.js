function init() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {
       lat:37.5569637,   
       lng:-77.4873396
    },
    zoom: 12
  });


  var searchBox = new google.maps.places.SearchBox(document.getElementById('search-bar'));
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('search-bar'));
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    searchBox.set('map', null);


    var places = searchBox.getPlaces();

    var bounds = new google.maps.LatLngBounds();
    var i, place;
    for (i = 0; place = places[i]; i++) {
      (function(place) {
        var marker = new google.maps.Marker({

          position: place.geometry.location
        });
        marker.bindTo('map', searchBox, 'map');
        google.maps.event.addListener(marker, 'map_changed', function() {
          if (!this.getMap()) {
            this.unbindAll();
          }
        });
        bounds.extend(place.geometry.location);


      }(place));

    }
    map.fitBounds(bounds);
    searchBox.set('map', map);
    map.setZoom(Math.min(map.getZoom(),12));

  });
}
google.maps.event.addDomListener(window, 'load', init);