<?php
  $dbname = "./../../SportsNearby/services/SportsNearby.db";
  try {
    $db = new PDO("sqlite:" . $dbname);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    "SQLite connection failed: " . $e->getMessage();
    exit();
  }
  $lon = $_GET['lon'];
  $lat = $_GET['lat'];
  $thresh = 100;
  $query = "select * from Event where (69.1*(".$lon." - eLocation_a)*69.1*(".$lon." - eLocation_a)+53.0*(".$lat." - eLocation_b)*53.0*(".$lat." - eLocation_b)) < ".$thresh;
  //echo $query;
  $result = $db->query($query);
  $db = null;
  $eArray = array();
  foreach($result as $row){
  	$elat = $row['eLocation_a'];
  	$elon = $row['eLocation_b'];
        $eID = $row['eID'];
        array_push($eArray,array($elat,$elon,$eID));
  }
  //echo $lat;
  //echo $lon;
  $arr = array("eventLocations" => $eArray);
  echo json_encode($arr);
?>
