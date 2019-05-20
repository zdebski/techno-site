<?php
if($_REQUEST["postWidth"] && $_REQUEST['postHeight'] && $_REQUEST['postLenght']){
    $width = $_REQUEST['postWidth'];
    $height = $_REQUEST['postHeight'];
    $lenght = $_REQUEST['postLenght'];

    $totalVolume = $width * $height * $lenght;
    
    $check = $totalVolume % 20;
    
    //if modulo is 0 than dividin by 20 gives total amount of heaters
    if($check == 0){
        $heaters = $totalVolume / 20;
    }
//if modulo is bigger or equal than 10, we need to round numbers of heatrs UP
elseif($check >= 10){
        $heaters = $totalVolume / 20;
        $heaters = round($heaters, 0, PHP_ROUND_HALF_UP);
}
//else, we need to just add one heaters e.g (if we got in $totalVolume = 42 m3, then we need 2 heaters and extra one for this 2 m^3)

else{
        $heaters = $totalVolume / 20;
        $heaters = round($heaters, 0, PHP_ROUND_HALF_DOWN);
        $heaters++;
}
    
    echo "Total number of heaters: ". $heaters;
}

?>