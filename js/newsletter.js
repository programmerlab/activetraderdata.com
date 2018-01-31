jQuery(document).ready(function () {
	
	 jQuery('.sub-btn').click(function(){
		  var validflag = true;
		
		//Email
		
				if(jQuery('#subscribe').val().trim() == '')
				{
					$('#subscribe').css({'border':'1px solid #ff0000'});
					$("#error").show();
					validflag = false;
				}
				else{
					if(jQuery('#subscribe').val()){
						var email=$("#subscribe").val();
						if(!(email.match( /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) )){
							$('#subscribe').css({'border':'1px solid #ff0000'});
							validflag = false;
						}else{
							$('#subscribe').css({'color':'#333333'});
							$("#error").hide();
						}
					}
				}	
				
		if(!validflag){
					return validflag;
				}else{
					jQuery('#ajaxLoader').show();
					sendquickMailFunc3();
					return false;
				}
					
				
	 
		
	});
			 
			 // Focus and blure 
				
				
				jQuery('#subscribe').focus(function(){
					
						$(this).css({'border-color':'#000000'});
						$("#error").hide();
				});
				jQuery('#subscribe').blur(function(){
						$(this).css({'border-color':'#e2e2e2'});
					
				});
				
				
				
				
				
			 
				
						
});


function sendquickMailFunc3(){
	
				var data = $("#quick-enquiry-form-news").serialize()+'&frmnews=submit';
				$.post('newsletter.php', data).done(function(response) {	
					if(response == 1) {
						$("#quick-enquiry-form-news")[0].reset();
						 var oldcolor = $("#quicksubmit").css('color');
						  $("#result1").css({'display':'block','color':'#7eba00','border':'1px solid #7eba00','margin-top':'20px','padding':'10px 0','text-align': 'center'});
						 $("#result1").text('Thank You For Subscribe!!');
						 jQuery('#ajaxLoader').hide();
						 setTimeout(function(){ $("#quicksubmit").val('Submit');
						 $("#quicksubmit").css('color',oldcolor);
						 $("#result").css('display','none');}, 5000);
					}
					else {
						
						$("#quick-enquiry-form-news")[0].reset();
						var oldcolor = $("#quicksubmit").css('color');
						$("#result1").css({'display':'block','color':'#ff0000'});
						$("#result1").text('Failed!!');
						jQuery('#ajaxLoader').hide();
						 setTimeout(function(){ $("#quicksubmit").val('Submit');
						 $("#quicksubmit").css('color',oldcolor);
						  $("#result1").css('display','none');}, 5000);		
						}
				});
																						
			}

