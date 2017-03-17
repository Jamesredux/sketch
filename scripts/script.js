$(document).ready(function()  {


var numSquare = 16;	
function addDiv()  {
	for (i = 1; i <= numSquare * numSquare; i++)  {
		$(".wrapper").append($("<div></div>").addClass('square'));
	}
	
var totalSquare = numSquare * numSquare;
var squareSize = 600 / numSquare;
$(".square").css({'height': squareSize, "width": squareSize});
}
addDiv();

$(".square").mouseenter(function ()  {
	$(this).addClass('mouse');
})
//This works but don'd want to use it yet
//.mouseleave(function() {
//	$(this).removeClass('mouse');
//})
function newGrid() {
	$(".square").remove();
	var numSquare = prompt("How many square do you want", "16")
	function changeDiv()  {
	for (i = 1; i <= numSquare * numSquare; i++)  {
		$(".wrapper").append($("<div></div>").addClass('square'));
	}
	
var totalSquare = numSquare * numSquare;
var squareSize = 600 / numSquare;
$(".square").css({'height': squareSize, "width": squareSize});
}
changeDiv();

}

$('#Bone').on('click', function() {
	newGrid();
});
//add check for correct number
//add var to change grid size

});