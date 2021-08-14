<?php
    function uri_segment($number){
        $requested_url = "http://".$_SERVER["HTTP_HOST"].$_SERVER['REQUEST_URI'];
        $ontroller_address = $requested_url ; 
        $uriSegments = explode("/",str_replace(BASE_DIR,"",$requested_url));
        if(isset($uriSegments[$number])){
            return $uriSegments;
        }
        else{
            return '';
        }
    }
?>