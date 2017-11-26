function requestStudents() {
	$.ajax({
		url: 'get-students',
		type: 'post',
		data: $("#form").serialize(),
		success: function(data) {
			console.log(data);
			$("form").prepend("<p>"+data.firstname+" "+data.surname+"</p>");
		},
		error: function(err) {
		}
	})
}

