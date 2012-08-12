$("#page-event").live('pagebeforeshow', function(){
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
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
  var myLatLng = new google.maps.LatLng(-34.397, 150.644);
  var shape = {
            coord: [1, 1, 1, 20, 18, 20, 18 , 1],
            type: 'poly'
        };
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
})

$("#page-create").live('pagebeforeshow', function(){
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas_small"),
    mapOptions);
})

