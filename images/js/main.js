// Mail
$(function() {
	new WOW().init();
	$('#but').click(function() {
	  $.ajax({
	      url: "https://formspree.io/a-a-m-k@ukr.net",  
	      method: "POST",
	      data: {
	             email: clientEmail.value,
	             message: clientName.value,
	             message: msg.value
	             }, 
	      dataType: "json"
	  }).done(function() {
	     $('#msgsend').html('<h1>Thanks for attention</h1>')
	  } );
	});
	//up
  





});