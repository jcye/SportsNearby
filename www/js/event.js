var serviceURL = "http://www.stanford.edu/~jcye/cgi-bin/SportsNearby/www/php/";

var events;

// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
var onSuccess = function(position) {
  var category = getUrlVars()["category"];
  //var lat = position.coords.latitude;
  //var lon = position.coords.longitude;
  var url = serviceURL + 'getNearbyEventsLocation.php?lon='+'-122.159024'+'&lat='+'37.424861'+'&category='+category;
  alert(url);
  $.getJSON(encodeURIComponent(url), function(data) {
    console.log('haha');
    var events_list = data.eventLocations;
    var mapOptions = {
      center: new google.maps.LatLng(37.424861, -122.159024),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);
    var image = new google.maps.MarkerImage('images/map-icons/pin_purple.png'
      //,
      // This marker is 20 pixels wide by 32 pixels tall.
      //new google.maps.Size(20, 32),
      // The origin for this image is 0,0.
      //new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      //new google.maps.Point(0, 32)
    );
    var shadow = new google.maps.MarkerImage('images/map-icons/pin_purple.png'
      //,
      // The shadow image is larger in the horizontal dimension
      // while the position and offset are the same as for the main image.
      // new google.maps.Size(37, 32),
      // new google.maps.Point(0,0),
      // new google.maps.Point(0, 32)
    );
    var shape = {
      coord: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
    };

    for (var i=0; i<events_list.length; i++) {
      var myLatLng = new google.maps.LatLng(events_list[i][0], events_list[i][1]);
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        shadow: shadow,
        icon: image,
        shape: shape,
        title: "Hello World",
        zIndex: 1
      });
      var message = "This is your location!";
      var infowindow = new google.maps.InfoWindow(
        { content: message,
          size: new google.maps.Size(50,50)
        });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });
    }
  });
};

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: '    + error.code    + '\n' +
    'message: ' + error.message + '\n');
}


function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

$('#page-event').live('pagebeforeshow', function(event) {
  //navigator.geolocation.getCurrentPosition(onSuccess, onError);
  var category = getUrlVars()["category"];
  //var lat = position.coords.latitude;
  //var lon = position.coords.longitude;
  var url = serviceURL + 'getNearbyEventsLocation.php?lon='+'-122.159024'+'&lat='+'37.424861'+'&category='+category;
  alert(url);
  $.getJSON(url, function(data) {
    console.log('haha');
    var events_list = data.eventLocations;
    var mapOptions = {
      center: new google.maps.LatLng(37.424861, -122.159024),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);
    var image = new google.maps.MarkerImage('images/map-icons/pin_purple.png'
      //,
      // This marker is 20 pixels wide by 32 pixels tall.
      //new google.maps.Size(20, 32),
      // The origin for this image is 0,0.
      //new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      //new google.maps.Point(0, 32)
    );
    var shadow = new google.maps.MarkerImage('images/map-icons/pin_purple.png'
      //,
      // The shadow image is larger in the horizontal dimension
      // while the position and offset are the same as for the main image.
      // new google.maps.Size(37, 32),
      // new google.maps.Point(0,0),
      // new google.maps.Point(0, 32)
    );
    var shape = {
      coord: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
    };

    for (var i=0; i<events_list.length; i++) {
      var myLatLng = new google.maps.LatLng(events_list[i][0], events_list[i][1]);
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        shadow: shadow,
        icon: image,
        shape: shape,
        title: "Hello World",
        zIndex: 1
      });
      var message = "This is your location!";
      var infowindow = new google.maps.InfoWindow(
        { content: message,
          size: new google.maps.Size(50,50)
        });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });
    }
  });
});


