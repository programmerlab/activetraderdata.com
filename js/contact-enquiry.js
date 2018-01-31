jQuery(document).ready(function () {
	
	 jQuery('.sbtn').click(function(){
		  var validflag = true;
		  
		 
		//Name 
				if(jQuery('#name').val().trim()=="" )
				{
					$('#name').css({'border':'1px solid #ff0000'});
					$("#error").show();
					validflag = false;
				}
				else{
					if(jQuery('#name').val()){
						var name=$("#name").val();
						if(!(name.match( /^[a-zA-Z ]{2,30}$/))){
							$('#name').css({'border':'1px solid #ff0000'});
							validflag = false;
						}else{
							$('#name').css({'color':'#333333'});
							$("#error").hide();
						}
					}
					
				}
				
		//Email
		
				if(jQuery('#email').val().trim() == '')
				{
					$('#email').css({'border':'1px solid #ff0000'});
					$("#error").show();
					validflag = false;
				}
				else{
					if(jQuery('#email').val()){
						var email=$("#email").val();
						if(!(email.match( /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) )){
							$('#email').css({'border':'1px solid #ff0000'});
							validflag = false;
						}else{
							$('#email').css({'color':'#333333'});
							$("#error").hide();
						}
					}
				}	
				
		//Phone
			if(jQuery('#phone').val().trim() == ''){
					$('#phone').css({'border':'1px solid #ff0000'});
					$("#pnone").show();
					validflag = false;
				}
				else{
					if(jQuery('#phone').val()){
						var email=$("#phone").val();
						if(!(email.match(/^\d*$/) )){
							$('#phone').css({'border':'1px solid #ff0000'});
							validflag = false;
						}else{
							$('#phone').css({'color':'#333333'});
							$("#error").hide();
						}
					}
				}
		
			//fax
			
					if(jQuery('#fax').val())
					{
						var email=$("#fax").val();
						if(!(email.match(/^\d*$/) ))
						{
							$('#fax').css({'border':'1px solid #ff0000'});
							validflag = false;
						}
						else
						{
							$('#fax').css({'color':'#333333'});
							$("#error").hide();
						}
					}
				
		
		//Message
				if(jQuery('#msg').val().trim()== ''){
					$('#msg').css({'border':'1px solid #ff0000'});
					$("#error").show();
					validflag = false;
				}
				else{
					$('#msg').css({'color':'#333333'});
					$("#error").hide();
				}
		

			if(!validflag){
					return validflag;
				}else{
					jQuery('#ajaxLoader').show();
					sendquickMailFunc2();
					return false;
				}
		
				
		
	 
		
	});
			 
			 // Focus and blure 
				jQuery('#name').focus(function(){
						$(this).css({'border-color':'#000000'});
						$("#error").hide();
				});
				
				jQuery('#name').blur(function(){
					
						$(this).css({'border-color':'#e2e2e2'});
					
				});
				
				jQuery('#email').focus(function(){
					
						$(this).css({'border-color':'#000000'});
						$("#error").hide();
				});
				jQuery('#email').blur(function(){
						$(this).css({'border-color':'#e2e2e2'});
					
				});
				
				
				
				jQuery('#phone').focus(function(){
					
						$(this).css({'border-color':'#000000'});
						$("#error").hide();
				});
				jQuery('#phone').blur(function(){
						$(this).css({'border-color':'#e2e2e2'});
					
				});
						
						
				jQuery('#fax').focus(function(){
					
						$(this).css({'border-color':'#000000'});
						$("#error").hide();
				});
				jQuery('#fax').blur(function(){
						$(this).css({'border-color':'#e2e2e2'});
					
				});
				
				
				
			
			 
				jQuery('#msg').focus(function(){
						$(this).css({'border-color':'#000000'});
						$("#error").hide();
				});
				
				jQuery('#msg').blur(function(){
					
						$(this).css({'border-color':'#e2e2e2'});
					
				});
		
				
						
});


function sendquickMailFunc2(){
	
				var data = $("#quick-enquiry-form").serialize()+'&frmenquiry=submit';
				$.post('contact-enquiry.php', data).done(function(response) {	
					if(response == 1) {
						$("#quick-enquiry-form")[0].reset();
						 var oldcolor = $("#quicksubmit").css('color');
						 $("#result").css({'display':'block','color':'#003300','border':'1px solid #003300','margin-top':'20px','padding':'10px 0','text-align': 'center'});
						 $("#result").text('Thank you for your message. It has been sent.' );
						 jQuery('#ajaxLoader').hide();
						 setTimeout(function(){ $("#quicksubmit").val('Submit');
						 $("#quicksubmit").css('color',oldcolor);
						 $("#result").css('display','none');}, 2000);
					}
					else {
						//alert('response' );
						$("#quick-enquiry-form")[0].reset();
						var oldcolor = $("#quicksubmit").css('color');
						$("#result").css({'display':'block','color':'#ff0000'});
						$("#result").text('Failed!!');
						jQuery('#ajaxLoader').hide();
						 setTimeout(function(){ $("#quicksubmit").val('Submit');
						 $("#quicksubmit").css('color',oldcolor);
						  $("#result").css('display','none');}, 2000);		
						}
				});
																						
			}
			
		
