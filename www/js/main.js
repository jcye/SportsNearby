$("#page-event").live('pagebeforeshow', function(){
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);
  var image = new google.maps.MarkerImage('images/basketball.png',
      // This marker is 20 pixels wide by 32 pixels tall.
      new google.maps.Size(20, 32),
      // The origin for this image is 0,0.
      new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      new google.maps.Point(0, 32));
  var myLatLng = new google.maps.LatLng(-34.397, 150.644);
  var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        //shadow: shadow,
        icon: image,
        shape: shape,
        title: "Hello World",
        zIndex: 0
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
