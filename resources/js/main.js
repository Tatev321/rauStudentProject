function requsetStudents() {
	$.ajax({
		url: 'get-students',
		success: function() {
			debugger;
		},
		error: function(err) {
			debugger;
		}
	})
}

requsetStudents();