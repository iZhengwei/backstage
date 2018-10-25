$(function() {

	let form = $("#login-form").submit(function() {return false});
	form.submit(function() {
		let account = form.find('[name=account]');
		if (!account.val()) {
			account.focus();
			console.log('账号不能为空')
			return;
		}

		let password = form.find('[name=password]');
		if (!password.val()) {
			password.focus();
			console.log('密码不能为空')
			return;
		}

		$.ajax({
			type: 'POST',
			url: form.attr('action'),
			data: form.serializeArray(),
			dataType: 'json',
			beforeSend: function(){
			},
			success: function(ret){
				console.log(ret)
			},
			error: function(res){
			}
		})
	});
});

	
