$(document).ready(function(){
   //submission scripts
  $('.contactForm').submit( function(){
		//statements to validate the form	
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var email = document.getElementById('e-mail');
		if (!filter.test(email.value)) {
			$('.email-missing').show();
		} else {$('.email-missing').hide();}
		if (document.cform.name.value == "") {
			$('.name-missing').show();
		} else {$('.name-missing').hide();}	
		if (document.cform.message.value == "") {
			$('.message-missing').show();
		} else {$('.message-missing').hide();}		
		if ((document.cform.name.value == "") || (!filter.test(email.value)) || (document.cform.message.value == "")){
			return false;
		} 
		
		if ((document.cform.name.value != "") && (filter.test(email.value)) && (document.cform.message.value != "")) {
			//hide the form
			$('.contactForm').hide();
		
			//show the loading bar
			$('.loader').append($('.bar'));
			$('.bar').css({display:'block'});

            var message = $('#message').val();
            var name = $('#name').val();
            var email = $('#e-mail').val();

            // Execute the JSONP request to submit the ticket
            $.jsonp({
                url: 'https://myhappyforce.uservoice.com/api/v1/tickets/create_via_jsonp.json?callback=?',
                data: {
                    client: 'TPDy3Asa9APJa6vRi9MYkQ',
                    ticket: {
                        message: message,
                        subject: 'Contacto desde el formulario de producto'
                    },
                    name: name,
                    email: email
                },
                success: function(data) {
                    $('.bar').css({display:'none'});
                    $('.loader').append(data);
                    setTimeout('$("#backgroundPopup").fadeOut("slow"); $("#contactForm").slideUp("slow")', 2000);
                    //hide the graphic
                    $('.contactFormResult').show();
                },
                error: function(d, msg) {
                    $('.bar').css({display:'none'});
                    $('.loader').append(data);
                    alert("Error enviando formulario. Por favor, escriba a info@myhappyforce.com");  // Darn -- something went wrong.  You might want to display a message to the user.
                }
            });

            return false;


		} 
  });
	//only need force for IE6  
	$("#backgroundPopup").css({  
		"height": document.documentElement.clientHeight 
	});  
});