<?php /* Template Name: Landing Page */ 


wp_enqueue_style( 'landing_page_tmpl', get_stylesheet_directory_uri().'/assets/css/main-tmpl/landing_page.css');
wp_enqueue_style( 'Roboto', get_stylesheet_directory_uri().'/assets/css/main-tmpl/roboto.css');
wp_enqueue_style( 'bootstrap-css', get_stylesheet_directory_uri().'/assets/css/main-tmpl/bootstrap.css');
wp_enqueue_script( 'jquery.min', get_stylesheet_directory_uri().'/assets/js/main-tmpl/jquery.min.js' );
wp_enqueue_script( 'bootstrap-js', get_stylesheet_directory_uri().'/assets/js/main-tmpl/bootstrap.min.js' );
wp_enqueue_script( 'landing_page_tmpl', get_stylesheet_directory_uri().'/assets/js/main-tmpl/landing_page_tmpl.js' );

get_header();
$ind_lst = array();

$args = array(
				"hide_empty" => 0,
				"type"       => "post",
				"orderby"    => "name",
				"order"      => "ASC" 
			 );
$categories = get_categories($args);
foreach ($categories as $cat)
{
	if($cat->cat_ID != 1)
	{
		$ind = array();
		$ind['cat_name'] =$cat->cat_name;
		$ind['cat_ID'] =$cat->cat_ID;
		array_push($ind_lst,$ind);
	}
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
			    	<a class="dropdown-item" cat_id="<?php echo $industry["cat_ID"];?>" href="#"><?php echo $industry["cat_name"];?> </a>
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
	        filterPagelst($(this).attr('cat_id'));
		});
		
	    $('div.flow-selector > .dropdown-menu > .dropdown-item:first-child').click();	
		
	    $('.dropdown').on('show.bs.dropdown', function(){
		    $('.down_arrow').addClass('up_arrow');
		    $('.down_arrow').removeClass('down_arrow');
        });	
	
});
</script>";?>

 





