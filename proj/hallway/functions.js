function forwards(){
    if (myXPos < map.length - 1){
        map[myXPos] = 0;
        map[myXPos + 1] = 1;
        console.log(map);
        myXPos += 1;
        array.pop();
        array.pop();
        array.pop();
        array.pop();

    }
    buildArray();
    draw();
}

function back(){
  console.log(map);
    if (myXPos > 0) {
        map[myXPos] = 0;
        map[myXPos - 1] = 1;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        console.log(map)
        myXPos -= 1;
    }
    buildArray();
    draw();
}
