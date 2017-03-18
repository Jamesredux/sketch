$(document).ready(function()  {
	drawGrid(32);


function drawGrid(numSquare)  {
	$(".square").remove();
	var squareSize = 600 / numSquare;

	for (i = 1; i <= numSquare * numSquare; i++)  {
		$(".wrapper").append($("<div></div>").addClass('square'));

	}	
	$(".square").css({'height': squareSize, "width": squareSize});
	

	$(".square").mouseenter(function ()  {
	$(this).css({"background-color": "#5e8be5"});
	});

}

function newGrid() {
	var requestNumber = prompt("How many squares do you want? Choose from 1-64", "32")
	var numSquare = requestNumber;
	if (isNaN(numSquare))  {
		alert("Choose a real number please")
		newGrid();
	}

	else if (numSquare <1 || numSquare > 64)  {
		alert("I SAID CHOOSE A SIZE BETWEEN 1-64")
		newGrid();
	}	
	else {
	drawGrid(numSquare);
}

}
	
$('#Bone').on('click', function(){
		newGrid();

}); 

//Random Color.

$('#Btwo').on('click', function(){
		
		newGrid();
		$(".square").mouseenter(function ()  {
	$(this).css({"background-color": randomColor()});
	});

});
function randomColor() {
	var digits = ['0','1','2','3','4','5','6','7','8',
	'9','A', 'B', 'C', 'D', 'E', 'F'],
	 ranColor = '#', i;
	for (i=0; i < 6; i++)  {
		ranColor = ranColor += digits[Math.floor(Math.random() * 16)];
	}
	return ranColor;
}
//end of randomColor function.

//picture

$('#Bthree').on('click', function(){
	 $('.wrapper').addClass("jazz");
	 drawGrid(64);
	 $(".square").mouseenter(function ()  {
	$(this).css({"background-color": 'transparent'});
	});

	});


//end of piicture

//gradient to do

//lastbrackets below!!
});


