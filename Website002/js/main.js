

function loadContent(page){
	var speed = 400;
		$.get("content/"+page+".txt", function(data) {
			$('#content').slideUp(speed);
			setTimeout(function(){
			$('#content').html(data);
			},speed);
			$('#content').slideDown(speed);
		}, 'text');
	};