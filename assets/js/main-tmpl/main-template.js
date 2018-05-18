var base_url_back = 'https://www.cliently.com/cliently_cms/uploads';
var aws_upload_url = 'https://cliently-wp.s3.us-west-2.amazonaws.com/cliently_cms/';
var current_theme = "x";
var default_credit = 8;


var addPageTitle = function(ind_data)
{
	console.log(ind_data.ind_1);
	console.log(ind_data.ind_2);
    $('div.page_name').children().remove();
    $('div.page_name').append('<p>'+ind_data.ind_1+'</p>');
    $('div.page_name').append('<p>targeting</p>');
    $('div.page_name').append('<p>'+ind_data.ind_2+'</p>');
}


var addactions = function(actions)
{
	for (var i = 0; i < actions.length; ++i)
	{
      console.log(actions[i]);

      action = actions[i];
      var action_name = action.class_name;
	  var addDiv, stepname ,imgpath ,action_detail;
	  var base_url = '~/../wp-content/themes/' + current_theme + '/assets/images/cliently-images';

	  addDiv = $('div#action_template > div.action-in-flow').clone(true, true);
	  action_position = action.position;
		switch (action_name)
		{

	       	 case 'EMAIL':

	       		  stepname = 'EMAIL';
				  imgpath  = base_url + '/email.svg';
				  action_detail= action.email_subject ;
				  var msg_body =  $('<textarea class=\'email_body\' />');
				  var email_sub = $('<input class=\'email_sub\' />');
				  msg_body.val(action.email_body);
				  email_sub.val(action_detail);
				  $(addDiv).find('.hidden_data_for_action').append(msg_body, email_sub);
		          break;

			 case 'WAIT':
	       		  stepname = 'WAIT';
	       		  imgpath  = base_url + '/wait.svg';
	       		  if(action.days == '1')
	       		  {
	       			action_detail='Wait ' + action.days +' Day' ;  
	       		  }
	       		  else
	       		  {
	       			action_detail='Wait ' + action.days +' Days' ;
	       		  }
				  
				  var only_weekend = $('<input class=\'only_weekend_check\' />');
				  var days_val = $('<input class=\'days_val\' />');
				  only_weekend.val(action.weekend_check);
				  days_val.val(action.days);
				  $(addDiv).find('.hidden_data_for_action').append(only_weekend,days_val);

				  break;

			 case "VIDEO-MESSAGE":

	    		  stepname = 'VIDEO MESSAGE';
				  imgpath  = base_url + "/videomessage.svg";
				  action_detail= action.video_email_subject ;
				  var video_msg_body =  $('<textarea class="videoemail_body" />');
				  var video_email_sub = $('<input class="video_email_sub" />');
				  var video_email_name = $('<input class="video_email_name" />');
				  video_msg_body.val(action.video_email_body);
				  video_email_sub.val(action_detail);
				  video_email_name.val(action.video_name);
				  $(addDiv).find('.hidden_data_for_action').append(video_email_sub,video_email_name,video_msg_body);

	       		  break;
	    	 case "POSTCARD":

	    		  stepname = 'POSTCARD';
			      imgpath  = base_url + "/postcard.svg";
			      action_detail = "Templated Design"
				  var postcard_msg =  $('<textarea class="postcard_msg" />');
			      var frnt_img =  $('<input class="frnt_img" />');
			      var bck_img =  $('<input class="bck_img" />');
			      var to_fullname =  $('<input class="to_fullname" />');
			      var to_companyname =  $('<input class="to_companyname" />');
			      var to_line1 =  $('<input class="to_line1" />');
			      var to_line2 =  $('<input class="to_line2" />');
			      var from_fullname =  $('<input class="from_fullname" />');
			      var from_companyname =  $('<input class="from_companyname" />');
			      var from_line1 =  $('<input class="from_line1" />');
			      var from_line2 =  $('<input class="from_line2" />');


			      postcard_msg.val(decodeURIComponent(action.postcard_msg));
			      frnt_img.val(action.front_image);
			      bck_img.val(action.back_image );
			      to_fullname.val(action.to.full_name);
			      to_companyname.val(action.to.companyname);
			      to_line1.val(action.to.line1);
			      to_line2.val(action.to.line2);


			      from_fullname.val(action.from.full_name);
			      from_companyname.val(action.from.companyname);
			      from_line1.val(action.from.line1);
			      from_line2.val(action.from.line2);

				  $(addDiv).find('.hidden_data_for_action').append(postcard_msg,frnt_img , bck_img,to_fullname,to_companyname,to_line1,to_line2,from_fullname,from_companyname,from_line1,from_line2);

	       		  break;
	    	 case "Handwritten_Notes":

	    		  stepname = 'HANDWRITTEN NOTES';
			      imgpath  = base_url + "/handwritten.svg";
			      action_detail = "Notes"
				  var hwnote_msg =  $('<textarea class="hwnote_msg" />');
			      var hdnote_script = $('<input class="hdnote_script" />');
			      var hdnote_ink_color = $('<input class="hdnote_ink_color" />');

			      var hwnote_to_fullname =  $('<input class="hwnote_to_fullname" />');
			      var hwnote_to_companyname =  $('<input class="hwnote_to_companyname" />');
			      var hwnote_to_line1 =  $('<input class="hwnote_to_line1" />');
			      var hwnote_to_line2 =  $('<input class="hwnote_to_line2" />');
			      var hwnote_from_fullname =  $('<input class="hwnote_from_fullname" />');
			      var hwnote_from_companyname =  $('<input class="hwnote_from_companyname" />');
			      var hwnote_from_line1 =  $('<input class="hwnote_from_line1" />');
			      var hwnote_from_line2 =  $('<input class="hwnote_from_line2" />');

			      var hdnote_envelop_ink_color = $('<input class="hdnote_envelop_ink_color" />');

			      hwnote_msg.val(decodeURIComponent(action.hwnote_msg));
			      hdnote_script.val(action.hdnote_script);
			      hdnote_ink_color.val(action.hdnote_ink_color);

			      hwnote_to_fullname.val(action.to.full_name);
			      hwnote_to_companyname.val(action.to.companyname);
			      hwnote_to_line1.val(action.to.line1);
			      hwnote_to_line2.val(action.to.line2);

			      hwnote_from_fullname.val(action.from.full_name);
			      hwnote_from_companyname.val(action.from.companyname);
			      hwnote_from_line1.val(action.from.line1);
			      hwnote_from_line2.val(action.from.line2);

			      hdnote_envelop_ink_color.val(action.hdnote_envelop_ink_color);

				  $(addDiv).find('.hidden_data_for_action').append(hwnote_msg, hdnote_script ,hdnote_ink_color,hdnote_envelop_ink_color, hwnote_to_fullname,hwnote_to_companyname,hwnote_to_line1,hwnote_to_line2,hwnote_from_fullname,hwnote_from_companyname,hwnote_from_line1,hwnote_from_line2);

	       		  break;

	    	 case "Gifting":

	    		  stepname = 'GIFTING';
			      imgpath  = base_url + "/gifting.svg";
			      action_detail = "Gift"

		    	  var gifting_image =  $('<input class="gifting_image" />');
			      var gift_card_script = $('<input class="gift_card_script" />');
			      var ammount_for_gifting = $('<input class="ammount_for_gifting" />');

			      var gift_msg =  $('<textarea class="gift_msg" />');
			      var gifting_script = $('<input class="gifting_script" />');
			      var gifting_ink_color = $('<input class="gifting_ink_color" />');

			      var gifting_to_fullname =  $('<input class="gifting_to_fullname" />');
			      var gifting_to_companyname =  $('<input class="gifting_to_companyname" />');
			      var gifting_to_line1 =  $('<input class="gifting_to_line1" />');
			      var gifting_to_line2 =  $('<input class="gifting_to_line2" />');
			      var gifting_from_fullname =  $('<input class="gifting_from_fullname" />');
			      var gifting_from_companyname =  $('<input class="gifting_from_companyname" />');
			      var gifting_from_line1 =  $('<input class="gifting_from_line1" />');
			      var gifting_from_line2 =  $('<input class="gifting_from_line2" />');

			      var gifting_envelop_ink_color = $('<input class="gifting_envelop_ink_color" />');

			      gifting_image.val(action.gift_image);
			      gift_card_script.val(action.gift_card_script);
			      ammount_for_gifting.val(action.ammount_for_gifting);

			      gift_msg.val(decodeURIComponent(action.gift_msg));
			      gifting_script.val(action.gifting_script);
			      gifting_ink_color.val(action.gifting_ink_color);

			      gifting_to_fullname.val(action.to.full_name);
			      gifting_to_companyname.val(action.to.companyname);
			      gifting_to_line1.val(action.to.line1);
			      gifting_to_line2.val(action.to.line2);

			      gifting_from_fullname.val(action.from.full_name);
			      gifting_from_companyname.val(action.from.companyname);
			      gifting_from_line1.val(action.from.line1);
			      gifting_from_line2.val(action.from.line2);

			      gifting_envelop_ink_color.val(action.gifting_envelop_ink_color);

				  $(addDiv).find('.hidden_data_for_action').append(gifting_image,gift_card_script,ammount_for_gifting,gift_msg,gifting_script,gifting_ink_color,gifting_to_fullname,gifting_to_companyname,gifting_to_line1,gifting_to_line2,gifting_from_fullname,gifting_from_companyname,gifting_from_line1,gifting_from_line2,gifting_envelop_ink_color);

	       		  break;
	    	 case "LinkedIn":

		   		  var type ='';
		   		  stepname = 'LINKEDIN';
		   		  
		   	      imgpath  = base_url + "/linkedin.svg";

		   	      if(action.linkedin_type =='INMAIL')
		   	      {
		   	    	  action_detail = 'InMail' ;
		   	    	  type ='INMAIL';
		   	      }
		   	      else
		   	      {
		   	    	  action_detail =  'Connect';
		   	    	  type ='CONNECT';
		   	      }
		   	       var linedinmailsub = $('<input class="linedinmailsub" />');
		   	       var linkedin_type = $('<input class="linkedin_type" />');
		   	       var linkedin_msg = $('<textarea class="linkedin_msg" />');

		   	       linkedin_type.val(action.linkedin_type);
		   	       linkedin_msg.val(decodeURIComponent(action.linkedin_msg));
		   	       if(type == 'INMAIL')
		   	       {
		   	    	   linedinmailsub.val(action.linedinmailsub);
		   	       }
		   	       else
		   	       {
		   	    	   linedinmailsub.val('');
		   	       }
		   	      $(addDiv).find('.hidden_data_for_action').append(linkedin_type,linkedin_msg,linedinmailsub);

		   		break;

	    	 case "TWITTER":

			     stepname = 'TWITTER';
				 imgpath  = base_url + "/twitter.svg";
			     action_detail = action.follow_unfollow;

			     if(action.follow_unfollow == 'FOLLOW')
			     {
			    	 action_detail = 'Follow';
			     }
			     else if(action.follow_unfollow == 'UNFOLLOW')
			     {
			    	 action_detail = 'UnFollow';
			     }
			     
				 var follow_unfollow = $('<input class="follow_unfollow" />');
				 follow_unfollow.val(action.follow_unfollow);

		   	     $(addDiv).find('.hidden_data_for_action').append(follow_unfollow);

		   		break;

		   	 default :

     }

	   $(addDiv).find('div.action-flow-image >img').attr('src',imgpath);
	   $(addDiv).find('div.action-details >  div.action-name').text('STEP ' + action_position +' - '+stepname);
	   $(addDiv).find('div.action-details >  div.action-detail').text(action_detail);
	   $(addDiv).attr('action_class', stepname );
	   $(addDiv).attr('position', action_position);
	   $(".flow-action").append(addDiv);
	   $(".flow-action").addClass('slimScrollBar-for-action-box');
	   
	}

}

var addAuthorDetails = function(author)
{
      console.log(author);
    if(author != null && author != undefined)
    {
    	  var addDiv, stepname ,imgpath ,action_detail;
  	      addDiv = $('div#action_template > div.action-in-flow').clone(true, true);

  	      addDiv.append('<div class="wrtn_by"> Written by : </div>');
	  	  stepname = author.written_by;
	  	  imgpath  = aws_upload_url + author.author_image;
	  	  action_detail= author.job_title ;
	  	  $(addDiv).find('div.action-flow-image >img').attr('src',imgpath);
	  	  $(addDiv).find('div.action-details >  div.action-name').text(stepname);
	  	  $(addDiv).find('div.action-details >  div.action-detail').text(action_detail);
	  	  $(addDiv).addClass('author-in-flow').removeClass('action-in-flow');
	  	  $(".action-left-panel").append(addDiv);
    }
 }

var addSimilarCamp = function(similar_camps)
{
   console.log(similar_camps);
   for (var j=0;j<similar_camps.length;j++)
   {
	   var sim_camp_link =  $('<a class="similar-campaigns-link" />');
	   $(sim_camp_link).attr('href',decodeURIComponent(similar_camps[j].url));
	   $(sim_camp_link).attr('position',similar_camps[j].position);
	   $(sim_camp_link).text(similar_camps[j].title);
	   $("div.similar-campaigns").append(sim_camp_link);
   }
}

var addTips = function(tips)
{
	 if(tips != null && tips != undefined)
	 {
	      console.log(tips);
	      var addDiv, stepname ,imgpath ,action_detail;
		  var base_url = '~/../wp-content/themes/' + current_theme + '/assets/images/cliently-images';

		  addDiv = $('div#action_template > div.action-in-flow').clone(true, true);
		  stepname = "TOP SECRET";
		  imgpath  = base_url + '/tips.svg';
		  action_detail= "Tips" ;
		  $(addDiv).find('div.action-flow-image >img').attr('src',imgpath);
		  $(addDiv).find('div.action-details >  div.action-name').text(stepname);
		  $(addDiv).find('div.action-details >  div.action-detail').text(action_detail);
		  $(addDiv).addClass('tips-in-flow');

		  var tips_body =  $('<textarea class="tips_body" />');
		  tips_body.val(tips);
		  $(addDiv).find('.hidden_data_for_action').append(tips_body);

		  $(".action-left-panel").append(addDiv);
	 }
}



$(document).ready(function(){


	$('.action-in-flow').click(function(){

		var base_url = '~/../wp-content/themes/' + current_theme + '/assets/images/cliently-images';

		var modal = $('.modal');
		$(modal).css('display','none');
		$(modal).attr('id','');
		$(modal).find('.modal-header > h4 > img').attr('src','');
		$(modal).find('.modal-header > h4 ').html($(modal).find('.modal-header > h4 > img'));
		$(modal).find('.work-creation-wizard-step').attr('id','');
		$(modal).find('.work-creation-wizard-step').attr('data-step','');
		$(modal).find('.work-creation-wizard-step').empty();

		if($(this).hasClass('tips-in-flow'))
		{
			var hidden = $(this).find('.hidden_data_for_action');

			$(modal).attr('id','work-pane-tips');
            $(modal).find('.modal-header > h4 > img ').attr('src',base_url + '/tips.svg');
//            $(modal).find('.modal-header > h4 ').append('CAMPAIGN Tips');

            $(modal).find('.modal-header > h4 > img ').css('float','left');
            var action_header = $('<div class="col-xs-11 action_header"/>');
            action_header.append('<small>' + 'CAMPAIGN' + '</small>');
            action_header.append('<span>' + 'Tips' + '</span>');
            $(modal).find('.modal-header > h4 ').append(action_header);


            var tips_body = $('<div class="tips_body" ><p>Who yous should target:</p><div/></div>');
            $(tips_body).find('div').append($(hidden).find('.tips_body').val());
            $(modal).find('.work-creation-wizard-step').append(tips_body);
            $(modal).css('display','block');

		}
		else
		{
			var action = $(this).attr('action_class');
	    	var position = $(this).attr('position');
	    	var hidden = $(this).find('.hidden_data_for_action');
			var modal = $('.modal');

			// Remove older Value

	    	switch(action)
	    	{
	    		case 'EMAIL':
	                  $(modal).attr('id','work-pane-email-send');
	                  $(modal).find('.modal-header > h4 > img ').attr('src',base_url + '/email.svg');

	                  $(modal).find('.modal-header > h4 > img ').css('float','left');
	                  var action_header = $('<div class="col-xs-11 action_header"/>');
	                  action_header.append('<small>STEP ' + position + '</small>');
	                  action_header.append('<span>' + action + '</span>');
	                  $(modal).find('.modal-header > h4 ').append(action_header);



//	                  $(modal).find('.modal-header > h4 ').append( 'STEP ' + position + ' ' + action );
	                  $(modal).find('.work-creation-wizard-step').attr('id','work-creation-wizard-step-work-pane-email-send');
	                  $(modal).find('.work-creation-wizard-step').attr('data-step','work-pane-email-send');
	                  var email_sub = $('<div class="email_action_sub" />');
	                  var eamil_body = $('<div class="eamil_body" />');
	                  email_sub.append($(hidden).find('.email_sub').val());
	                  eamil_body.append($(hidden).find('.email_body').val());
	                  $(modal).find('.work-creation-wizard-step').append(email_sub,eamil_body);
	                  $(modal).css('display','block');
	    			  break;
	    		case 'WAIT':
	    			  $(modal).attr('id','work-pane-event-time-delay');
	    			  $(modal).find('.modal-header > h4 > img ').attr('src',base_url + '/wait.svg');

	    			  $(modal).find('.modal-header > h4 > img ').css('float','left');
	                  var action_header = $('<div class="col-xs-11 action_header"/>');
	                  action_header.append('<small>STEP ' + position + '</small>');
	                  action_header.append('<span>' + action + '</span>');
	                  $(modal).find('.modal-header > h4 ').append(action_header);




//	    			  $(modal).find('.modal-header > h4 ').append( 'STEP ' + position + ' ' + action );
	    			  $(modal).find('.work-creation-wizard-step').attr('id','work-creation-wizard-step-work-pane-event-time-delay');
	                  $(modal).find('.work-creation-wizard-step').attr('data-step','work-pane-event-time-delay');
	                  var wait_upper = $('<div class="wait_action_upper" />');
	                  $(wait_upper).append('<p>How long would you like to wait before sending the next step?</p>');
	                  $(wait_upper).append('<label> <input id="wait_day" type="text" name="type_value" class="form-control" size="2" /> &nbsp;days</label>');
	                  $(wait_upper).find('#wait_day').val($(hidden).find('input.days_val').val());
	                  $('#work-pane-event-time-delay').find('input#wait_day').val($(hidden).find('input.days_val').val());
	                  var wait_lower = $('<div class="wait_action_lower">');
	                  $(wait_lower).append('<p>Only send the following action Monday - Friday between the hours of 9AM and 5PM.</p>');
	                  $(wait_lower).append('<p>This is set to the timezone of where you last logged in.</p>');
	                  $(wait_lower).append('<div class="btn-group" id="week_end_check" data-toggle="buttons" ><label class="btn btn-default btn-on"><input type="radio" value="1" class="week_end_on_off" name="week_end_check" >YES</label><label class="btn btn-default btn-off"><input class="week_end_on_off"  type="radio" value="0" name="week_end_check">NO</label></div>');
	 			      var weekend_check =$(hidden).find('input.only_weekend_check').val();
	 			      if(weekend_check == 'yes')
	 			      {
	 			    	$(wait_lower).find('#week_end_check > .btn-on').addClass('active');
	 			      }
	 			      else if(weekend_check == 'no')
	 			      {
	 			    	$(wait_lower).find('#week_end_check > .btn-off').addClass('active');
	 			      }
	                  $(modal).find('.work-creation-wizard-step').append(wait_upper,wait_lower);
	                  $(modal).css('display','block');

	 			  break;
	    		case 'VIDEO MESSAGE':
	    			  $(modal).attr('id','work-pane-email-video');
	    			  $(modal).find('.modal-header > h4 > img ').attr('src',base_url + '/videomessage.svg');

	    			  $(modal).find('.modal-header > h4 > img ').css('float','left');
	                  var action_header = $('<div class="col-xs-11 action_header"/>');
	                  action_header.append('<small>STEP ' + position + '</small>');
	                  action_header.append('<span>' + action + '</span>');
	                  $(modal).find('.modal-header > h4 ').append(action_header);



//	    			  $(modal).find('.modal-header > h4 ').append( 'STEP ' + position + ' ' + action );
	    			  $(modal).find('.work-creation-wizard-step').attr('id','work-creation-wizard-step-work-pane-email-video');
	                  $(modal).find('.work-creation-wizard-step').attr('data-step','work-pane-email-video');
	                  var video_comm = $('<div class="video_email_action_common">');
	                  $(video_comm).append('<div class="btn-group" id="video_email_toggle" data-toggle="buttons" ><label class="btn btn-default btn-on video_email_toggle_on"><input type="radio" value="1"  name="video_email_toggle" >VIDEO</label><label class="btn btn-default btn-off video_email_toggle_off"><input type="radio" value="0" name="video_email_toggle">MESSAGE</label></div>');
	                  var video_email_sub = $('<div class="video_email_sub" />');
	                  video_email_sub.append($(hidden).find('input.video_email_sub').val());
	                  $(video_comm).append(video_email_sub);
	                  $(video_comm).find('.btn-on').addClass('active');
	                  var video_email_action_lower = $('<div class="video_email_action_lower">');
	                  var video_action_video_part = $('<div class="video_action_video_part">');
	                  video_action_video_part.append('<video controls src="'+ base_url_back +'/Video_email/' + $(hidden).find('input.video_email_name').val() +'"/>')
	                  var video_eamil_body = $('<div class="video_eamil_body" />');
	                  video_eamil_body.append($(hidden).find('textarea.videoemail_body').val());
	                  video_email_action_lower.append(video_action_video_part,video_eamil_body);
	                  $(modal).find('.work-creation-wizard-step').append(video_comm,video_email_action_lower);
	                  $(modal).css('display','block');
				  break;
	    	    case 'POSTCARD':
	    	    	  $(modal).attr('id','work-pane-postcard');
	  			      $(modal).find('.modal-header > h4 > img ').attr('src',base_url + '/postcard.svg');

	  			      $(modal).find('.modal-header > h4 > img ').css('float','left');
	                  var action_header = $('<div class="col-xs-11 action_header"/>');
	                  action_header.append('<small>STEP ' + position + '</small>');
	                  action_header.append('<span>' + action + '</span>');
	                  $(modal).find('.modal-header > h4 ').append(action_header);


//	  			      $(modal).find('.modal-header > h4 ').append( 'STEP ' + position + ' ' + action );
	  			      var post_card_comm = $('<div class="post_card_common">');
	                  $(post_card_comm).append('<div class="btn-group" id="post_card_toggle" data-toggle="buttons" ><label class="btn btn-default btn-on post_card_toggle_on"><input type="radio" value="1"  name="post_card_toggle" >FRONT</label><label class="btn btn-default btn-off post_card_toggle_off"><input type="radio" value="0" name="post_card_toggle">BACK</label></div>');
	                  $(post_card_comm).find('.btn-on').addClass('active');

	                  var post_card_lower = $('<div class="post_card_lower">');
	                  var post_card_front = $('<div class="post_card_front"><img src=""/></div>');
	                  post_card_front.find('img').attr('src', aws_upload_url + $(hidden).find('input.frnt_img').val() );

	                  var post_card_back = $('<div class="post_card_back"><img src=""/></div>');
	                  post_card_back.find('img').attr('src', aws_upload_url + $(hidden).find('input.bck_img').val());

	                  var post_card_msg = $('<div class="post_card_msg"><textarea/></div>');
	                  post_card_msg.find('textarea').val( $(hidden).find('textarea.postcard_msg').val());
	                  post_card_back.append(post_card_msg);
	                  var post_card_from =  $('<div class="post_card_from">');
	                  post_card_from.append('<p>'+ $(hidden).find('input.from_fullname').val() +'</p><br>');
	                  post_card_from.append('<p>'+ $(hidden).find('input.from_companyname').val() +'</p><br>');
	                  post_card_from.append('<p>'+ $(hidden).find('input.from_line1').val() +'</p><br>');
	                  post_card_from.append('<p>'+ $(hidden).find('input.from_line2').val()+'</p><br>');
	                  post_card_back.append(post_card_from);
	                  var post_card_img_tmpl =  $('<div class="post_card_img_tmpl">');
	                  post_card_img_tmpl.append('<img src="' + base_url +'/postcard.png">');
	                  post_card_back.append(post_card_img_tmpl);
	                  var post_card_to =  $('<div class="post_card_to">');
	                  post_card_to.append('<p>'+ $(hidden).find('input.to_fullname').val() +'</p><br>');
	                  post_card_to.append('<p>'+ $(hidden).find('input.to_companyname').val() +'</p><br>');
	                  post_card_to.append('<p>'+ $(hidden).find('input.to_line1').val() +'</p><br>');
	                  post_card_to.append('<p>'+ $(hidden).find('input.to_line2').val()+'</p><br>');
	                  post_card_to.append('<p class="extra_note">Address will be populated from lead card.</p><br>');
	                  post_card_back.append(post_card_to);
	                  post_card_lower.append(post_card_front,post_card_back)
	                  $(modal).find('.work-creation-wizard-step').append(post_card_comm,post_card_lower);
	  			      $(modal).css('display','block');
				  break;
	    	    case 'HANDWRITTEN NOTES':
	    	    	  $(modal).attr('id','handwritten_notes');
	  			      $(modal).find('.modal-header > h4 > img ').attr('src',base_url + '/handwritten.svg');

	  			      $(modal).find('.modal-header > h4 > img ').css('float','left');
	                  var action_header = $('<div class="col-xs-11 action_header"/>');
	                  action_header.append('<small>STEP ' + position + '</small>');
	                  action_header.append('<span>'+ action +'</span>');
	                  $(modal).find('.modal-header > h4 ').append(action_header);


//	  			      $(modal).find('.modal-header > h4 ').append( 'STEP ' + position + ' ' + action );
				      var hdn_comm = $('<div class="hdn_comm">');
				      hdn_comm.append('<div class="btn-group" id="hdn_toggle" data-toggle="buttons" ><label class="btn btn-default btn-on hdn_toggle_on"><input type="radio" value="1"  name="hdn_toggle" >MESSAGE</label><label class="btn btn-default btn-off hdn_toggle_off"><input type="radio" value="0" name="hdn_toggle">ENVELOP</label></div>')
				      hdn_comm.find('.btn-on').addClass('active');
				      var hdn_message = $('<div class="hdn_message"><textarea/></div>');
				      hdn_message.find('textarea').val($(hidden).find('textarea.hwnote_msg').val());
				      hdn_message.css('background-image','url('+base_url+'/handwrittennote_bg.png)');
				      hdn_message.css('background-repeat','no-repeat');
				      
				      var hdn_addional_note = $('<p class="hdn_addional_note">This will be handwritten on a 4x6 heavyweight index card.</p>');
				      var hdn_envelop = $('<div class="hdn_envelop"/>');
				      var hdn_envelop_from = $('<div class="hdn_envelop_from"/>');
				      hdn_envelop_from.append('<p class="hdn_env_from_additional">Return Address:*</p>');
				      hdn_envelop_from.append('<p class="hdn_env_from">'+$(hidden).find('input.hwnote_from_fullname').val()+'</p>');
				      hdn_envelop_from.append('<p class="hdn_env_from">'+$(hidden).find('input.hwnote_from_companyname').val()+'</p>');
				      hdn_envelop_from.append('<p class="hdn_env_from">'+$(hidden).find('input.hwnote_from_line1').val()+'</p>');
				      hdn_envelop_from.append('<p class="hdn_env_from">'+$(hidden).find('input.hwnote_from_line2').val()+'</p>');
				      hdn_envelop.append(hdn_envelop_from);
				      var hdn_envelop_to = $('<div class="hdn_envelop_to"/>');
				      hdn_envelop_to.append('<p class="hdn_env_to">'+$(hidden).find('input.hwnote_to_fullname').val()+'</p>');
				      hdn_envelop_to.append('<p class="hdn_env_to">'+$(hidden).find('input.hwnote_to_companyname').val()+'</p>');
				      hdn_envelop_to.append('<p class="hdn_env_to">'+$(hidden).find('input.hwnote_to_line1').val()+'</p>');
				      hdn_envelop_to.append('<p class="hdn_env_to">'+$(hidden).find('input.hwnote_to_line2').val()+'</p>');
				      hdn_envelop_to.append('<p class="hdn_env_to_additional">Address will be populated from lead card.</p>');
				      hdn_envelop.append(hdn_envelop_to);
//				      $('#handwritten_notes').find('select#script_for_handWrittent_note').val($(hidden).find('input.hdnote_script').val());
//				      $('#handwritten_notes').find('select#ink_color_for_handWrittent_note').val($(hidden).find('input.hdnote_ink_color').val());
//				      $('#handwritten_notes').find('select#envelop_ink_color_for_handWrittent_note').val($(hidden).find('input.hdnote_envelop_ink_color').val());
	  			      $(modal).find('.work-creation-wizard-step').append(hdn_comm,hdn_message,hdn_addional_note,hdn_envelop);
				      $(modal).css('display','block');
				  break;


	    	    case 'GIFTING':

	    	    	  $(modal).attr('id','gifting');
	  			      $(modal).find('.modal-header > h4 > img ').attr('src',base_url + '/gifting.svg');
	  			      $(modal).find('.modal-header > h4 > img ').css('float','left');
	                  var action_header = $('<div class="col-xs-11 action_header"/>');
	                  action_header.append('<small>STEP ' + position + '</small>');
	                  action_header.append('<span>' + action + '</span>');
	                  $(modal).find('.modal-header > h4 ').append(action_header);



//	  			      $(modal).find('.modal-header > h4 ').append( 'STEP ' + position + ' ' + action);
	  			      var gift_comm = $('<div class="gift_comm">');
	  			      gift_comm.append('<div class="btn-group" id="gift_toggle" data-toggle="buttons" ><label class="btn btn-default btn-on gift_toggle_card"><input type="radio" value="1" name="gift_toggle" >GIFT CARD</label><label class="btn btn-default btn-off gift_toggle_message"><input type="radio" value="0" name="gift_toggle">MESSAGE</label><label class="btn btn-default btn-off gift_toggle_envelope"><input type="radio" value="0" name="gift_toggle">ENVELOPE</label></div>');
	  			      gift_comm.find('.btn-on').addClass('active');
	  			      var gift_card_area = $('<div class="gift_card_area">');

	  			      gift_card_area.append('<p>Choose a Gift Card and have a message handwritten to your recipient:</p>');


	  			      var gift_card_image = $('<div class="gift_card_image"><img src=""/></div>');
	  			      $(gift_card_image).find('img').attr('src' ,aws_upload_url + $(hidden).find('input.gifting_image').val());
	  			      gift_card_image.append('<p>Amazon.com Gift Card</p>');
	  			      gift_card_image.append('<a href="#">Choose a Different Gift Card</a>');
	  			      gift_card_area.append(gift_card_image);

	  			      var gift_card_amount =$('<div class="gift_card_amount"><p>Load the Gift Card with:</p></div>');
	  			      var gift_card_amount_val =$('<div class="gift_card_amount_val"></div>');
	  			      gift_card_amount_val.append($(hidden).find('input.ammount_for_gifting	').val());
	  			      gift_card_amount.append(gift_card_amount_val);
	  			      var credit_total = default_credit;
	  			      if($(hidden).find('input.ammount_for_gifting').val() != "")
	  			      {
	  			    	credit_total = parseInt($(hidden).find('input.ammount_for_gifting').val())+ default_credit;
	  			      }
	  			      gift_card_amount.append('<p>These will cost '+ credit_total +' credits each and includes the handwritten message as well as postage.</p>');
	  			      gift_card_area.append(gift_card_amount);

				      var gift_message = $('<div class="gift_message"><textarea/></div>');
				      gift_message.find('textarea').val($(hidden).find('textarea.gift_msg').val());
				      gift_message.css('background-image','url('+base_url+'/handwrittennote_bg.png)');
				      gift_message.css('background-repeat','no-repeat');
				      var gift_addional_note = $('<p class="gift_addional_note">This will be handwritten on a 4x6 heavyweight index card.</p>');

				      var gift_envelop = $('<div class="gift_envelop"/>');
				      var gift_envelop_from = $('<div class="gift_envelop_from"/>');
				      gift_envelop_from.append('<p class="gift_env_from_additional">Return Address:*</p>');
				      gift_envelop_from.append('<p class="gift_env_from">'+$(hidden).find('input.gifting_from_fullname').val()+'</p>');
				      gift_envelop_from.append('<p class="gift_env_from">'+$(hidden).find('input.gifting_from_companyname').val()+'</p>');
				      gift_envelop_from.append('<p class="gift_env_from">'+$(hidden).find('input.gifting_from_line1').val()+'</p>');
				      gift_envelop_from.append('<p class="gift_env_from">'+$(hidden).find('input.gifting_from_line2').val()+'</p>');
				      gift_envelop.append(gift_envelop_from);
				      var gift_envelop_to = $('<div class="gift_envelop_to"/>');
				      gift_envelop_to.append('<p class="gift_env_to">'+$(hidden).find('input.gifting_to_fullname').val()+'</p>');
				      gift_envelop_to.append('<p class="gift_env_to">'+$(hidden).find('input.gifting_to_companyname').val()+'</p>');
				      gift_envelop_to.append('<p class="gift_env_to">'+$(hidden).find('input.gifting_to_line1').val()+'</p>');
				      gift_envelop_to.append('<p class="gift_env_to">'+$(hidden).find('input.gifting_to_line2').val()+'</p>');
				      gift_envelop_to.append('<p class="gift_env_to_additional">Address will be populated from lead card.</p>');
				      gift_envelop.append(gift_envelop_to);

				      if($(hidden).find('input.gifting_envelop_ink_color').val()=="WHITE w BLACK INK")
				      {
				    	  $(gift_envelop).css('background-color','white');
				    	  $(gift_envelop).find('div.gift_envelop_from > p').css('color','black');
				    	  $(gift_envelop).find('div.gift_envelop_to > p').css('color','black');
				      }
				      
//	    	    	  $('#gifting').find('select#gift_card').val($(hidden).find('input.gift_card_script').val());
//	    	    	  $('#gifting').find('input#ammount_for_gifting').val($(hidden).find('input.ammount_for_gifting	').val());
//
//				      $('#gifting').find('select#script_for_gifting').val($(hidden).find('input.gifting_script').val());
//				      $('#gifting').find('select#ink_color_for_gifting').val($(hidden).find('input.gifting_ink_color').val());
//				      $('#gifting').find('select#envelop_ink_color_for_gifting').val($(hidden).find('input.gifting_envelop_ink_color').val());

	  			      $(modal).find('.work-creation-wizard-step').append(gift_comm,gift_card_area,gift_message,gift_addional_note,gift_envelop);
				      $(modal).css('display','block');
			      break;
	    	   case 'LINKEDIN':
	    		      $(modal).attr('id','linkedin');
				      $(modal).find('.modal-header > h4 > img ').attr('src',base_url + '/linkedin.svg');
				      $(modal).find('.modal-header > h4 > img ').css('float','left');
	                  var action_header = $('<div class="col-xs-11 action_header"/>');
	                  action_header.append('<small>STEP ' + position + '</small>');
	                  action_header.append('<span>' + action + '</span>');
	                  $(modal).find('.modal-header > h4 ').append(action_header);

//				      $(modal).find('.modal-header > h4 ').append( 'STEP ' + position + ' ' + action );
				      var linkedIn_comm = $('<div class="linkedIn_comm">');
	  	    	      if($(hidden).find('input.linkedin_type').val() == "INMAIL")
	  	    	      {
	  	    	    	var linkedIn_InMail_txt = $('<div class="linkedIn_InMail_txt">We will prompt you to manually send the following message or InMail:</div>');
	  	    	    	linkedIn_comm.append(linkedIn_InMail_txt);

	  	    	    	var linkedIn_InMail_sub = $('<div class="linkedIn_InMail_sub">'+ $(hidden).find('input.linedinmailsub	').val() +'</div>');
	  	    	    	linkedIn_comm.append(linkedIn_InMail_sub);
	  	    	      }
	  	    	      else
	  	    	      {
	  	    	    	var linkedIn_connect_txt = $('<div class="linkedIn_connect_txt">We will notify you to connect with a pre-filled version of the message you type below:</div>');
	  	    	    	linkedIn_comm.append(linkedIn_connect_txt);
	  	    	      }

	  	   		      var linkedIn_msg = $('<div class="linkedIn_msg"><textarea /></div>');

	  	   		      $(linkedIn_msg).find('textarea').val($(hidden).find('textarea.linkedin_msg').val());
	  	   		      linkedIn_comm.append(linkedIn_msg);
	  	    	      $(modal).find('.work-creation-wizard-step').append(linkedIn_comm);
				      $(modal).css('display','block');

				  break;
	    	   case 'TWITTER':

	    		      $(modal).attr('id','twitter-follow');
				      $(modal).find('.modal-header > h4 > img ').attr('src',base_url + '/twitter.svg');
				      $(modal).find('.modal-header > h4 > img ').css('float','left');
	                  var action_header = $('<div class="col-xs-11 action_header"/>');
	                  action_header.append('<small>STEP ' + position + '</small>');
	                  action_header.append('<span>' + action + '</span>');
	                  $(modal).find('.modal-header > h4 ').append(action_header);
//				      $(modal).find('.modal-header > h4 ').append( 'STEP ' + position + ' ' + action );
				      var twitter_comm = $('<div class="twitter_comm">');
	                  $(twitter_comm).append('<div class="btn-group" id="twitter_follow_unfollw" data-toggle="buttons" ><label class="btn btn-default btn-on twitter_follow_unfollw_on"><input type="radio" value="1"  name="twitter_follow_unfollw" >Follow</label><label class="btn btn-default btn-off twitter_follow_unfollw_off"><input type="radio" value="0" name="twitter_follow_unfollw">Unfollow</label></div>');
	    		      var follow_unfollow =$(hidden).find('input.follow_unfollow').val();

	    		      if(follow_unfollow == 'FOLLOW')
	    		      {
	    		    	  $(twitter_comm).find('.btn-on').addClass('active');
	    		      }
	    		      else if (follow_unfollow == 'UNFOLLOW')
	    		      {
	    		    	  $(twitter_comm).find('.btn-off').addClass('active');
	    		      }

	    		      var twitter_tmpl = $('<div class="twitter_tmpl">');

	    		      twitter_tmpl.append('<img src="'+base_url + '/twitter.svg"/>');
	    		      twitter_tmpl.append('<a href="#">@getcliently</a>');
	    		      $(twitter_comm).append(twitter_tmpl);
	    		      $(modal).find('.work-creation-wizard-step').append(twitter_comm);
	                  $(modal).css('display','block');

				  break;
	    	}
		}

	});




	$(document).on('click', '#video_email_toggle > label.video_email_toggle_on', function(){

		$(this).closest('.work-creation-wizard-step').find('.video_email_action_lower > .video_eamil_body').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.video_email_action_lower > .video_action_video_part').css('display','block');

	});
    $(document).on('click', '#video_email_toggle > label.video_email_toggle_off', function(){

    	$(this).closest('.work-creation-wizard-step').find('.video_email_action_lower > .video_action_video_part').css('display','none');
    	$(this).closest('.work-creation-wizard-step').find('.video_email_action_lower > .video_eamil_body').css('display','block');

	});

   $(document).on('click', '#post_card_toggle > label.post_card_toggle_on', function(){

		$(this).closest('.work-creation-wizard-step').find('.post_card_lower > .post_card_back').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.post_card_lower > .post_card_front').css('display','block');

	});
    $(document).on('click', '#post_card_toggle > label.post_card_toggle_off', function(){

    	$(this).closest('.work-creation-wizard-step').find('.post_card_lower > .post_card_front').css('display','none');
    	$(this).closest('.work-creation-wizard-step').find('.post_card_lower > .post_card_back').css('display','block');

	});
    $(document).on('click', '#hdn_toggle > label.hdn_toggle_on', function(){

		$(this).closest('.work-creation-wizard-step').find('.hdn_envelop').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.hdn_message').css('display','block');
		$(this).closest('.work-creation-wizard-step').find('.hdn_addional_note').css('display','block');

	});
    $(document).on('click', '#hdn_toggle > label.hdn_toggle_off', function(){

    	$(this).closest('.work-creation-wizard-step').find('.hdn_message').css('display','none');
    	$(this).closest('.work-creation-wizard-step').find('.hdn_addional_note').css('display','none');
    	$(this).closest('.work-creation-wizard-step').find('.hdn_envelop').css('display','block');

	});



    $(document).on('click', '#gift_toggle > label.gift_toggle_card', function(){

		$(this).closest('.work-creation-wizard-step').find('.gift_message').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.gift_addional_note').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.gift_envelop').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.gift_card_area').css('display','block');

	});
    $(document).on('click', '#gift_toggle > label.gift_toggle_message', function(){


		$(this).closest('.work-creation-wizard-step').find('.gift_card_area').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.gift_envelop').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.gift_message').css('display','block');
		$(this).closest('.work-creation-wizard-step').find('.gift_addional_note').css('display','block');

	});
    $(document).on('click', '#gift_toggle > label.gift_toggle_envelope', function(){

    	$(this).closest('.work-creation-wizard-step').find('.gift_message').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.gift_addional_note').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.gift_card_area').css('display','none');
		$(this).closest('.work-creation-wizard-step').find('.gift_envelop').css('display','block');

	});


});
