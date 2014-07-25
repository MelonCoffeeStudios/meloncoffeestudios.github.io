$(function(){










});


var stringArrayOne = ["Welcome to GriffTec Corp Terminal Control", "Please enter valid GriffTec username:", "root", "Please enter password:","**********", "Password accepted! Welcome 'root'.", "Clearing terminal!"] // Intro strings
var stringArrayTwo = ["temp"]



var fs = {
	one: stringArrayOne,
	two: stringArrayTwo
}

var cursorHTML = "<span class='cursorCSS'>&nbsp;</span>"

function type(what, where, button, callafter){
	//Clear Cursor
	$(".cursorCSS").remove()

	// Typing function
	var d = new Date()
    var n = d.getTime()
	$("#terminalTextContainer").append("<div id='"+where+n+"Div'> </div>")
	$("#"+where+n+"Div").append("<p id="+where+n+"></p>"+cursorHTML)
	var i = 0                    //  set your counter to 1
	var letter = what.split("")

	function sleepFor () {           //  create a loop function
	   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
	      $("#"+where+n).append(letter[i])         //  your code here
	      i++                   //  increment the counter
	      if (i < letter.length) {            //  if the counter < 10, call the loop function
	         sleepFor()           //  ..  again which will trigger another 
	      }  
	      else{
	      	$("#"+where+n+"Div").append("<br>")
	      }                     //  ..  setTimeout()
	   }, Math.floor((Math.random() * 100) + 5))
	}
	if(button == true){
		$("#"+where+n).toggleClass("termButton")
	}

sleepFor();   
}


function timeoutType(what, where, button, when){
	setTimeout(function(){
		type(what,where,button)
	},when)
}


function intro(){
	$("#terminalTextContainer").html("")

	timeoutType(fs.one[0],"l1",0,1000)
	timeoutType(fs.one[1],"l2",0,3500)
	timeoutType(fs.one[2],"l3",0,6000)
	timeoutType(fs.one[3],"l4",0,8000)
	timeoutType(fs.one[4],"l5",0,10000)
	timeoutType(fs.one[5],"l6",0,12500)
	timeoutType(fs.one[6],"l7",0,14500)

	setTimeout(function(){
		clearTerminal();
	},15000)
}


setTimeout(intro(), 750)

function clearTerminal(){
	var terminalText = $("#terminalTextContainer div").length
	if(terminalText != 0){
		setTimeout(function(){
			$("#terminalTextContainer div:first-child").remove();
			clearTerminal();
		},100)
	}
	else{
		
	}
}
