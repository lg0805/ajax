$(function(){

	$('.errorMessage').hide();

	$('#login').submit(function(){

		var email, password;

		if ($('#email').val().length >= 6) {

			email = $('#email').val();

			$('#emailP').removeClass('error');
			$('#emailError').hide();
		} else {
			$('#emailP').addClass('error');
			$('#emailError').show();
		};

		if ($('#password').val().length > 0) {

			password = $('#password').val();

			$('#passwordP').removeClass('error');
			$('#passwordError').hide();
		} else {

			$('#passwordP').addClass('error');
			$('#passwordError').show();
		};


		// if appropriate, perform the Ajax request
		// 如果合适，执行Ajax请求
		
		if (email && password) {

			// Create an object for the form request
			// 为表单请求创建一个对象
			var data = new Object;

			data.email = email;
			data.password = password;

			// Create an object of Ajax options
			// 创建Ajax选项的对象
			var options = new Object;

			options.data = data;
			options.dataType = "text";
			options.type = 'get';
			options.success = function(response){

				if (response == 'CORRECT') {

					$('#login').hide();

					$('#results').removeClass('error');
					$('#results').text('You are now logged in!');
				} else if(response == "INCORRECT") {

					$('#results').text('The submitted credentials do not match those in file!');
					$('#results').addClass('error');
				} else if(response == 'INCOMPLETE'){

					$('#results').text('Please provide an email address and a password!');
					$('#results').address('error');
				} else if(response == 'INVALID_EMAIL'){

					$('#results').text('Please provide your email address!');
					$('#results').addClass('error');
				}
			} // End of success

			options.url = 'login_ajax.php';

			$.ajax(options);
					
		}; 
		

		return false;
		// alert('ok');
	});
	
})