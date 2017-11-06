function requsetStudents() {
	$.ajax({
		url: 'get-students',
		success: function() {

		},
		failure: function(err) {

		}
	})
}

requsetStudents();