


	var creatXhrRequest = function(method, url, isasynch, RequestHeaders,withCredentials)
		{
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open(method, url, isasynch);
			if (withCredentials)
			{
				xmlhttp.withCredentials = true;
			}
			for ( var key in RequestHeaders)
			{
				xmlhttp.setRequestHeader(key, RequestHeaders[key]);
			}
			return xmlhttp;
		}


var filterPagelst = function(cat_ID)
{
	var RequestHeaders = [];
    RequestHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
    var url = '/wordpress/index.php/wp-json/custom_url/pglst?cat_ID='+cat_ID;
    var xhr = creatXhrRequest("GET", url, false, RequestHeaders, false);
    xhr.send();
    
    if (xhr.status == 200) 
	{
		var jsonResponse = JSON.parse(xhr.responseText)
		console.log(jsonResponse);
		
		for(var i=0; i < jsonResponse.length; i++)
		{
			var ind_page = $('<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 ind_page text-center" onclick="window.location.href =\'?page_id=' + jsonResponse[i].ID + '\'">');
			var ind_page_con = $('<div class="ind_page_con">');
			var right_con = $('<div class="right_cor">');
			$(ind_page_con).append(right_con);
			$(ind_page_con).append('<p>' + jsonResponse[i].post_title +'</p>');
			
			var page_content = JSON.parse(jsonResponse[i].post_content);
			
			if(page_content.card_summary)
			{
				$(ind_page_con).append('<p>'+page_content.card_summary+'</p>');	
			}
			else
			{
				$(ind_page_con).append('<p></p>');	
			}
			
			
			$(ind_page).append(ind_page_con);
			$('div.list_container > div.page_template >div.row').append(ind_page);
		}
		
	} 
	else
	{
		
	}
}