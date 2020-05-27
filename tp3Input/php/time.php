<?php
$date = getdate();
$h = $date[hours];
$m = $date[minutes];
$s = $adte[seconds];
$tab = array("Il est : $h:$m:$s",array("hours"=> $h,"minutes" => $m,"seconds" => $s);
$json = json_encode($tab);
print_r($json);
exit;
?>