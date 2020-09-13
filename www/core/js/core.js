//Core.js


var App = {
	setMainPage: function(path, method = "GET", data = {}, datatype = "text"){
		$.ajax({
			url: path,
			method: method,
			data: data,
			dataType: datatype
		}).done(function(res){
			$("#index-body").html(res);
		}).fail(function(){
			$("#index-body").html("Fail fetching " + path);
		});
	},
	navigate: function(path, method = "GET", data = {}, datatype = "text"){
		$.ajax({
			url: path,
			method: method,
			data: data,
			dataType: datatype
		}).done(function(){
			
		}).fail(function(){
			
		});
	}
};









