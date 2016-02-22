var img = new Image();
img.src = 'https://cbschicago.files.wordpress.com/2010/09/72525288_10.jpg'

var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d");


var W = 350,
		H = 450;

canvas.height = H; canvas.width = W;


var ball = {},
		gravity = 0.3,
		bounceFactor = .96;


ball = {
	x: W/2,
	y: 180,
	
	radius: 30,
	color: "brown",
	

	vx: 0,
	vy: 1,
	
	draw: function() {
	
		ctx.beginPath();
		ctx.arc( 110, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
};

function clearCanvas() {
	ctx.clearRect(0, 0, W, H);
}

function update() {
 
  
	clearCanvas();
  ctx.drawImage(img,0,0,350,450)
	ball.draw();
	
  
	ball.y += ball.vy;
	
	ball.vy += gravity;

	if(ball.y + ball.radius > H) {
		
		ball.y = H - ball.radius;
		ball.vy *= -bounceFactor;
	}
}


setInterval(update, 1000/60);