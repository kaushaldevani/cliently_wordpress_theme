# cliently_wordpress_theme

For Front-end in word press

1) Add below line of code in function.php at following path

   Path : ' ~/wp-content/themes/{ your-theme-name }/function.php '
    
	 add this line  : 'remove_filter( 'the_content', 'wpautop' );'
	
	 Note: For refrence added function.php in above repo.
	
2) Add this plugin to enable api in Wordpress

   Download it from -https://github.com/WP-API/Basic-Auth , extract and add it to 	'~/wp-content/plugins' folder
   and activate it from admin panel

3) Now at '~/wp-content/themes/{ your-theme-name }/assets/js/' path add new folder called 'main-tmpl' and copy all the js 
   files from above repo ('assets/js/main-tmpl/') and paste it to the folder.
	 
   Same for css, and for image create 'cliently-images' folder instead of 'main-tmpl' and then add all the image
   from above repo('assets/images/cliently-images/') to the folder

4) Now add main_template.php at following path
 
   '~/wp-content/themes/ { your-theme-name }/'
	 
5) Add this code to style.css at following path

    @font-face 
	  {
		  font-family: BradleyHandITCTT;  
		  src: url('assets/css/main-tmpl/BRADHI.ttf');  
		  font-weight: normal;  
	  }
   
    Path : ' ~/wp-content/themes/ { your-theme-name }/style.css '
    
    Note: For refrence added style.css in above repo.

5) Last Step in main-template.js file at '~/wp-content/themes/{your-theme-name }/assets/js/main-tmpl/main-template.js'
   we have variable 'base_url' change the value of it

   from : '~/../wp-content/themes/twentyseventeen/assets/images/cliently-images'
   
   to : '~/../wp-content/themes/{ your-theme-name }/assets/images/cliently-images'

   same thing for variable 'base_url_back' which is pointing to backend  upto '/uploads' so 
   
   from : 'http://localhost/cliently_cms/uploads'
   
   to : '{ Url Where we host Backend }/uploads'


   
   
