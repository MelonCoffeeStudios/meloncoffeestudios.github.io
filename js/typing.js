$(function(){










});


var stringArrayOne = ["Welcome to GriffTec Corp Terminal Control", "Please enter valid GriffTec username:", "root", "Please enter password:**********", ] // Intro strings
var stringArrayTwo = ["temp"]



var fs = {
	one: stringArrayOne,
	two: stringArrayTwo
}

var cursorHTML = "<span class='cursorCSS'>&nbsp;</span>"

function type(what, where, button, callafter){
	//Clear Cursor
	$(".cursorCSS").remove();

	// Typing function
	var d = new Date();
    var n = d.getTime();
	$("#terminalTextContainer").append("<div id='"+where+n+"Div'> </div>")
	$("#"+where+n+"Div").append("<p id="+where+n+"></p>"+cursorHTML)
	var i = 0                    //  set your counter to 1
	var letter = what.split("")

	function sleepFor () {           //  create a loop function
	   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
	      $("#"+where+n).append(letter[i])         //  your code here
	      i++;                     //  increment the counter
	      if (i < letter.length) {            //  if the counter < 10, call the loop function
	         sleepFor()           //  ..  again which will trigger another 
	      }  
	      else{
	      	$("#"+where+n+"Div").append("<br>");
	      }                     //  ..  setTimeout()
	   }, Math.floor((Math.random() * 100) + 5))
	}
	if(button == true){
		$("#"+where+n).toggleClass("termButton")
	}

sleepFor();   
}



setTimeout(function(){
type(stringArrayOne[0], "lineOne")
	setTimeout(function(){
		type(stringArrayOne[1], "lineTwo")
	},3000)
}, 1000)

function intro(){
	timeoutType(fs.one[0],"lineOne", 0, 1000);
	timeoutType(fs.one[1],"lineTwo", 0, 3000);
	timeoutType(fs.one[2],"lineThree",0,5500);
	timeoutType(fs.one[3],"lineFour",0,7500);
}

