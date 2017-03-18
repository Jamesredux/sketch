$(document).ready(function()  {
	drawGrid(32);


function drawGrid(numSquare)  {
	$(".square").remove();
	var squareSize = 600 / numSquare;

	for (i = 1; i <= numSquare * numSquare; i++)  {
		$(".wrapper").append($("<div></div>").addClass('square'));

	}	
	$(".square").css({'height': squareSize, "width": squareSize});
	

	

}

//this is the function for the simple stuff I had to take it out of draw grid.
//I've had to copy it into the function for when the reset button is pressed, 
// tidy this up create a function.
function defaultSketch()   { $(".square").mouseenter(function ()  {
	$(this).css({"background-color": "#5e8be5"});
	});
};
defaultSketch();
//general new grid function.

function newGrid() {
	$('.wrapper').removeClass().addClass('wrapper' );
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
		defaultSketch();

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
$('#Bfour').on('click', function() {
	

	newGrid();
	$('.wrapper').css("background-color", "#e8a261");
	 $('.square').hover(function() {
		$(this).css('opacity', 0);
		$('.wrapper').css("background-color", "black");
	}, function(){

		$(this).fadeTo(1000, 1);
 	});
	





});







//lastbrackets below!!
});


