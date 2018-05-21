<?php /* Template Name: main */ 

wp_enqueue_script( 'jquery.min', get_stylesheet_directory_uri().'/assets/js/main-tmpl/jquery.min.js' );
wp_enqueue_style( 'main-template', get_stylesheet_directory_uri().'/assets/css/main-tmpl/main-template.css');
wp_enqueue_style( 'Roboto', get_stylesheet_directory_uri().'/assets/css/main-tmpl/roboto.css');
wp_enqueue_style( 'bootstrap-css', get_stylesheet_directory_uri().'/assets/css/main-tmpl/bootstrap.css');
wp_enqueue_script( 'bootstrap-js', get_stylesheet_directory_uri().'/assets/js/main-tmpl/bootstrap.min.js' );
wp_enqueue_script( 'main-template', get_stylesheet_directory_uri().'/assets/js/main-tmpl/main-template.js' );


$current_theme = "x";

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg" style="margin-top:0 !important;">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div class="main">
            <?php 
                  $page_id = get_the_ID();  //Page ID
                  $page_data = get_page( $page_id );
                  $post_content = $page_data->post_content;
                  $someArray = json_decode($post_content,true);
                  $actions_data = json_encode($someArray['action_data'],true);
                  $similar_camps = json_encode($someArray['similar_camp'],true);
                  $author = json_encode($someArray['author'],true);
                  $tips = json_encode($someArray['tips'],true);
                  $ind_data = json_encode($someArray['industry_data'],true);
                  ?>
                  <div class="page_title">
                      <div class="page_name">
                          <span><?php echo $page_data->post_title ;?></span>
                      </div> 
                  </div>
                  <div class="main_content">
                  		<div class="action-left-panel">
                        	<div class="flow-action">
                        		<div id="action_template" style="display:none;" >
                      				<div class="action-in-flow">
                     					<div class="action-flow-image">
  	                     					<img src="images/email.svg">
                     					</div>  
	                  					<div class="action-details">
	                      					<div class="action-name">STEP 1 - EMAIL </div>
		   			  		    			<div class="action-detail">{FirstName}, quick question</div>
		   			  		    			<div class="hidden_data_for_action"></div>
                   						</div>    
                       				</div>
                      			</div>	
 							</div>				  
				  		</div>	
				  		<div class="modal_area">
				  			<div id="work-pane-email-send" class="modal">
								<div class="modal-dialog">    
									<div class="modal-content">
										<div class="modal-header">
											<h4 class="modal-title">
												<img src="~/../wp-content/themes/twentyseventeen/assets/images/cliently-images/email.svg"> Send Email
											</h4> 
								        </div>
								        <div class="modal-body">
											    <div class="work-creation-wizard-step" id="work-creation-wizard-step-work-pane-email-send" data-step="work-pane-email-send" >
											       <div class="email_action_sub">
											          Email Subject
											       </div>
											       <div class="eamil_body">
											             HI
											             
											             This is for email Test
											             
											             Thanks
											        
											       </div>
												</div>
										</div>
									</div>
								</div>
							</div>
				  		</div>
				  		
				  		<div class="right-panel">
					  		
						  		<div class="title-2"><?php echo $page_data->post_title ;?></div>
						  			
						  		<div class="send-emails-videos">
						  		<div class="list-item">
							  		<div class="icon-wrap">
							  			<img src="~/../wp-content/themes/<?php echo $current_theme;?>/assets/images/cliently-images/circle_check.svg">
							  		</div>
							  		<div class="sev-text">
							  			Reach out to clients through multiple channels to ensure the highest response rate.
							  		</div>
							  		</div>
							  	<div class="list-item">
							  		<div class="icon-wrap">
							  			<img src="~/../wp-content/themes/<?php echo $current_theme;?>/assets/images/cliently-images/circle_check.svg">
							  		</div>
							  		<div class="sev-text">
							  			Send automated Emails, custom Video Messages, Physical Postcards, and Handwritten Notes with Gift Cards to really engage your prospect.
							  		</div>
							  		</div>
							  		<div class="list-item">
							  		<div class="icon-wrap">
										<img src="~/../wp-content/themes/<?php echo $current_theme;?>/assets/images/cliently-images/circle_check.svg">
							  		</div>
							  		<div class="sev-text">
							  			Engage with leads directly from your CRM or by uploading a list of contacts.
							  		</div>
							  		</div>
						  		</div>
					  		
						  		<div class="row text-center">
						  			<button class="btn btn-primary btn-creat-flow">Create your own Flow!</button></div>
						  		
						  		
					  			<div class="border-bottom"></div>
					  			<div class="similar-campaigns">
					  				Similar Campaigns:
					  			</div>
				  		</div>
				  		</div>
                  <?php echo "<script type=\"text/javascript\">
                 			 
                 	     $(document).ready(function() {
                 	              addPageTitle($ind_data); 
  								  addactions($actions_data);
  							  	  addSimilarCamp($similar_camps);
								  addTips($tips);		
								  addAuthorDetails($author);
								  $($('div.flow-action > .action-in-flow')[0]).click();

		                 });
                     </script>";
                  
            
            ?>   
            
    </div>
</body>