<?php
  $dbname = "./../../SportsNearby/services/SportsNearby.db";
  try {
    $db = new PDO("sqlite:" . $dbname);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    "SQLite connection failed: " . $e->getMessage();
    exit();
  }
  $result = $db->query("select * from User where uID = '".$_GET[userid]."'");
  $db = null;
  foreach($result as $row){
  	$lat = $row['uLocation_a'];
  	$lon = $row['uLocation_b'];
  }
  //echo $lat;
  //echo $lon;
  $arr = array('lat' => $lat, 'lon' => $lon);
  echo json_encode($arr);
?>
