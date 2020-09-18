function setPlayerRotation(){
    player.rotation = Math.atan((player.yT - canvas.clientHeight/2) / (player.xT - canvas.clientWidth/2));
    if (player.xT > canvas.clientWidth/2){
        player.rotation = 3 + player.rotation
    }
}

function mouseClick(event){
	let clickX = event.clientX;
    let clickY = event.clientY;
    player.xT = clickX;
    player.yT = clickY;
    player.xRT = clickX - canvas.clientWidth/2 + player.wX;
    player.yRT = clickY - canvas.clientHeight/2 + player.wY;
    setPlayerRotation();
    
}