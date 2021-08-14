<?php
   // require_once('include/init.php');
   //echo "this in index.php";

   if(isset($_GET['url'])){
       echo"<pre>";
       $url = explode('/',$_GET['url']);
       //print_r ($url);
       $view = $url[0];
       switch(strtolower($view)){
           case 'resume':
                  //  echo "Enter this section";
                    $content='themes/templateparts/resume.html';;
                    $tittle='Resume';
                    break;
            default:
                $content='themes/templeparts/home.html';
                $tittle='Home';
                break;
       }
 
   }
   else 
   {
    $content='themes/templateparts/home.html';
    $tittle='Portfolio';
   }
   require_once('themes/templates.html');
?>