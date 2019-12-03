function draw(x,y){
	var canvas = document.getElementById('canvas');
	var xct = canvas.getContext('2d');
	xct.save();

	xct.clearRect(0,0,550,400);
	xct.fillStyle = "rgba(0,200,0,1)";
	xct.fillRect (x, 20, 50, 50);
	xct.restore();
	x += 1;

	var loopTimer = setTimeout('draw('+x+'), ('+y+'), 200');
}
