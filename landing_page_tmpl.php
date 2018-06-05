<?php /* Template Name: Landing Page */ 


wp_enqueue_style( 'landing_page_tmpl', get_stylesheet_directory_uri().'/assets/css/main-tmpl/landing_page.css');
wp_enqueue_style( 'Roboto', get_stylesheet_directory_uri().'/assets/css/main-tmpl/roboto.css');
wp_enqueue_style( 'bootstrap-css', get_stylesheet_directory_uri().'/assets/css/main-tmpl/bootstrap.css');
wp_enqueue_script( 'jquery.min', get_stylesheet_directory_uri().'/assets/js/main-tmpl/jquery.min.js' );
wp_enqueue_script( 'bootstrap-js', get_stylesheet_directory_uri().'/assets/js/main-tmpl/bootstrap.min.js' );
wp_enqueue_script( 'landing_page_tmpl', get_stylesheet_directory_uri().'/assets/js/main-tmpl/landing_page_tmpl.js' );

get_header();
$url = 'https://www.cliently.com/cliently_cms/api/industry.php';
$arg = array ( 'method' => 'GET');
$ind_lst = array();
$response = wp_remote_get ( $url, $arg );
$respo_body = json_decode($response['body']);

if($respo_body->status ==  200)
{
	foreach ($respo_body->data as $row)
	{
		$ind = array();
		$ind['industry'] =$row->Industry;

		$input = preg_replace('~[^\pL\d]+~u', '-',  $row->Industry);
		$input = iconv('utf-8', 'us-ascii//TRANSLIT', $input);
		$input = preg_replace('~[^-\w]+~', '', $input);
		$input = trim($input, '-');
		$input = preg_replace('~-+~', '-', $input);
		$input = strtolower($input);
		$ind['val'] =strtolower($input);
		array_push($ind_lst,$ind);
	}
}
else
{
	alert('Error While Fetching Industry List');
}

?>
<div class="main">

	<div class="page_title">
	   <div class="page_name">
       	  <p>Campaign Template Gallery</p>
       	  <p>25+ complete campaign templates to jump-start sales outreach.</p>
       </div> 
	</div>
	<div class="selction_container">
	   <p>Get Started by selecting your industry...</p>
	   <div class="dropdown flow-selector">
           <a class="btn btn-primary dropdown-toggle" type="button" id="dropdown_for_workflow-selection" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		      <div class="down_arrow"></div> 
		   </a> 
		  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
		    <?php 
			    foreach ($ind_lst as $industry)
			    {?>
			    	<a class="dropdown-item" val="<?php echo $industry["val"];?>" href="#"><?php echo $industry["industry"];?> </a>
		   <?php }?> 
  		  </div>
        </div>
     </div>
     
     <div class="list_container">
         <div class="page_template">
            <div class="row">
            </div>
         </div>
     </div>
     
   </div>  


<?php echo "<script type=\"text/javascript\">
 
$(document).ready(function() {

        $('div.flow-selector > .dropdown-menu > .dropdown-item').click(function(){
		  
			$('#dropdown_for_workflow-selection').text($(this).text());
			$('#dropdown_for_workflow-selection').append('<div class=\'down_arrow\'>');
			$('div.list_container > div.page_template > div.row').empty();
	        filterPagelst($(this).attr('val'));
		});
		
	    $('div.flow-selector > .dropdown-menu > .dropdown-item:first-child').click();	
		
	    $('.dropdown').on('show.bs.dropdown', function(){
		    $('.down_arrow').addClass('up_arrow');
		    $('.down_arrow').removeClass('down_arrow');
        });	
	
});
</script>";?>

 





