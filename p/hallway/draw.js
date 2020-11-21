
function buildArray(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  var xPos = 0;
  var yPos = 0;
  var change = 30;
  array = [];
  for (i = 0; i < map.length-myXPos; i++){
    xPos = xPos + change;
    yPos = yPos + change;
    array.push([xPos,yPos,canvasWidth-xPos,yPos]);
    array.push([canvasWidth-xPos,yPos,canvasWidth-xPos,canvasHeight-yPos]);
    array.push([xPos,yPos,xPos,canvasHeight-yPos]);
    array.push([canvasWidth-xPos,canvasHeight-xPos,xPos,canvasHeight-yPos]);
    change = change / 1.33;
  }

  //Diagnal Lines
  array.push([canvasWidth-xPos,xPos,canvasWidth,0]);
  array.push([xPos,canvasHeight - yPos,0,canvasHeight]);
  array.push([canvasWidth-xPos,canvasHeight-xPos,canvasWidth,canvasHeight]);
  array.push([xPos,yPos,0,0]);
  draw();
}

function draw(){
  for (i = 0; i < array.length; i++){
    ctx.beginPath();
    ctx.moveTo(array[i][0], array[i][1]);
    ctx.lineTo(array[i][2], array[i][3]);
    ctx.stroke();
  }
}
