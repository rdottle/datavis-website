var myfirstvar = 20;
var secondvar = 35;
var name = "Rachael";
var bool = false;
var nums = [1, 3, 4, 50]
var myobject = {name: "juan", date: 20};
var x5 = "mystery value...";


// function preload(){

	
// }

function myfirstfun(x1, x2, x3){
	var x4 = x1*x2*x3;
	return x4;
}

function setup(){
	console.log(myfirstvar)
	createCanvas(1000, 1000);
	for (var i = 0; i < 100; i++){
		print(i);
	}
}

// concatenating things, it will determine data type based on the first variable or input

var circlesize = 50;
function draw(){
	// background(0);
	if (mouseIsPressed){
		fill(255);
	}
	else {
		fill(0);
	}
	ellipse(mouseX, mouseY, 10, 10);
	fill(0);
	stroke(255, 40, 30);
	strokeWeight(1);

}
