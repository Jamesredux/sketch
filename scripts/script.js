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

//default drawing function

function defaultSketch(pen)   { 
	 var drawColor = pen;
	$(".square").mouseenter(function ()  {
	$(this).css({"background-color": drawColor});
	});
};

// run above function for the first time on page load.

defaultSketch("#dcb239");

//general new grid function.

function newGrid() {
	$('.wrapper').removeClass().addClass('wrapper' );
	var requestNumber = prompt("How many squares do you want? Choose from 1-64", "32")
	var numSquare = requestNumber;
	if (isNaN(numSquare))  {
		alert("Please input a real number.")
		newGrid();
	}

	else if (numSquare <1 || numSquare > 64)  {
		alert("**I SAID CHOOSE A SIZE BETWEEN 1-64**")
		newGrid();
	}	
	else {
	drawGrid(numSquare);
}

}
	
// Button One reset

$('#Bone').on('click', function(){
		newGrid();
		defaultSketch("#dcb239");

}); 

// Button Two Random Color.

$('#Btwo').on('click', function(){
		
		newGrid();
		
		$(".square").mouseenter(function ()  {
		$(this).css({"background-color": randomColor()});
	});

});

//random color generator 

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

//button three jazzy picture

$('#Bthree').on('click', function(){
	
	 $('.wrapper').addClass("jazz");
	 drawGrid(40);
	 defaultSketch("transparent");

	});


//end of picture

//button four snake

$('#Bfour').on('click', function() {
	

	newGrid();
	$('.wrapper').css("background-color", "#e8a261");
	 $('.square').hover(function() {
		$(this).css('opacity', 0);
		$('.wrapper').css("background-color", "black");
	}, function(){

		$(this).fadeTo(1000, 1);
 	})	

});







//lastbrackets below!!
});


