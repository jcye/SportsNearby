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
  $category = $_GET['category'];
  $thresh = 10000;
  $query = "select * from Event where (69.1*(".$lat." - eLocation_a)*69.1*(".$lat." - eLocation_a)+53.0*(".$lon." - eLocation_b)*53.0*(".$lon." - eLocation_b)) < ".$thresh;
  if($category != 0){
    $category_result = $db->query("select * from categoryHash where cID = ".$category);
    foreach ($category_result as $category_row){
      $category = $category_row['eCategory'];
    }
    $query = $query." and eCategory = '".$category."'";
  }
  echo $query;
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
