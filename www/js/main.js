$("#page-event").live('pagebeforeshow', function(){
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    callback: function(){
      this.addMarker({'position': '-34.397, 150.644','icon':'images/basketball.png' }).click(function() {
                        this.openInfoWindow({ 'content': 'hello world' }, this);
      });
    }
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);
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
