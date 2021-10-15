canvas = document.getElementById("myCanvas");
canvas1 = canvas.getContext("2d"); 

car_height = 100;
car_width = 50;

car_x = 10;
car_y = 90;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	bg = new Image();
	bg.onload = uploadBackground;
	bg.src = background_image;

	bg_car = new Image();
	bg_car.onload = uploadgreencar;
	bg_car.src = greencar_image;

	//upload car, and background images on the canvas.
}

function uploadBackground() {
	canvas1.drawImage(bg,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	canvas1.drawImage(bg_car,car_x,car_y,30,40);
	//Define function ‘uploadgreencar’.
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >= 30){
		car_y = car_y - 1;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car upward
}

function down()
{
	if(car_y <= 80){
		car_y = car_y + 1;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car downward
}

function left()
{
	if(car_x >= 10){
		car_x = car_x - 1;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car left side
}

function right()
{
	if(car_x <= 260){
		car_x = car_x + 1;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car right side
}
