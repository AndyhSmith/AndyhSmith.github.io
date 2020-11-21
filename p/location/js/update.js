function playerMovement() {
    player.sX = Math.cos(player.rotation) * player.s;
	player.sY = Math.sin(player.rotation) * player.s;
    //Move Right
    player.wX += player.sX;
    player.wY += player.sY;
}


function update(){
    playerMovement();
    draw();
}