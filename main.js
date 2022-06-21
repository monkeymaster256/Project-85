canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
greencar_image_width=75;
greencar_image_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_image_x=5
greencar_image_y=225;




function add() {
	background_imgTag= new Image();
	background_image.onload=uploadBackground;
	background_image.src=background_image;

	greencar_imgTag=new Image();
	greencar_imgTag.onlaod=uploadgreencar;
greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imgTag, greencar_x, greencar_image_y, greencar_image_width, greencar_image_height);
	
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
	if(greencar_image_y){

		greencar_image_y=greencar_image_y-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
