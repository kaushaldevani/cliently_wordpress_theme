<?php 
function my_theme_enqueue_styles() {

	$parent_style = 'twentyseventeen-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.

	wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'child-style',
			get_stylesheet_directory_uri() . '/style.css',
			array( $parent_style ),
			wp_get_theme()->get('Version')
	);
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );


/** added by Kaushal Devani **/


remove_filter( 'the_content', 'wpautop' );


add_action('get_header', 'remove_admin_login_header');

function remove_admin_login_header() {
	remove_action('wp_head', '_admin_bar_bump_cb');
}


function get_page_lst(WP_REST_Request $request) {
	$parameter = $request->get_param('cat_ID');
	$posts = get_posts(
			array(
					'numberposts'	=> -1,
					'post_type'		=> 'page',
					'cat' => $parameter,
					'post_status'   => 'draft,publish'
			)
	);
	if (empty($posts))
	{
		return null;
	}
	return $posts;
}
add_action( 'rest_api_init', function () {
	register_rest_route( 'custom_url', '/pglst', array(
			'methods' => 'GET',
			'callback' => 'get_page_lst',
	));
});


	function is_pages_exist(WP_REST_Request $request) {

		$pg_lst_raw = $request->get_body();
		$pg_lst = json_decode($pg_lst_raw, true);
		$pg_lst = $pg_lst['pg_lst'];
		$pg_lst_result = array();
		foreach ($pg_lst as $pg)
		{
			$post_data = array();
			$post_data['id'] = $pg['id'];
			$post_data['wp_id'] = $pg['wp_id'];
			if(get_post_status($pg['wp_id']) === FALSE ||  get_post_status($pg['wp_id']) === 'trash')
			{
				$post_data['is_exist'] = false;
			}
			else
			{
				$post_data['is_exist'] = true;
			}
			array_push($pg_lst_result ,$post_data);
		}

		if (empty($pg_lst_result))
		{
			return null;
		}
		return $pg_lst_result;

	}

	add_action( 'rest_api_init', function () {
		register_rest_route( 'custom_url', '/checkForPagesExist', array(
				'methods' => 'POST',
				'callback' => 'is_pages_exist',
		));
	});


	function add_category_for_page()
	{
		register_taxonomy_for_object_type('category', 'page');
	}
	add_action( 'init', 'add_category_for_page' );

	/** end of Kaushal Devani **/
