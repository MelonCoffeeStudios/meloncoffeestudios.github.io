

function loadContent(page){
	var speed = 400;
		$.get("content/"+page+".txt", function(data) {
			$('#content').toggleClass('hidden');
			setTimeout(function(){
			$('#content').html(data);
			
			$('#content').toggleClass('hidden');
		},speed);
		}, 'text');
	};