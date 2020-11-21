/**
 * Draws to Canvas
 */
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Draw the Player
    ctx.save();
    ctx.translate(canvas.clientWidth/2, canvas.clientHeight/2);
    ctx.rotate(player.rotation);
    animateSprite(player.animations[player.as], player);
    ctx.restore();

    //Draw Player Position
    ctx.font = "10px Arial";
    ctx.fillText("wX: " + Math.trunc(player.wX) + ", wY: " + Math.trunc(player.wY), 10, 20);
    ctx.font = "10px Arial";
    ctx.fillText("xRT: " + Math.trunc(player.xRT) + ", yRT: " + Math.trunc(player.yRT), 10, 35);

    //Draw One Tree
    ctx.beginPath();
    ctx.arc(tree.wX+player.wX, tree.wY+player.wY, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.drawImage(tree.img, 
        tree.wX + player.wX - tree.w/2, 
        tree.wY + player.wY - tree.h/2)
}

/**
 * Makes animation easy.
 * @param {Image} img 
 * @param {Object} object 
 */
function animateSprite(img, obj) {
    //IMG, ClippingX, ClippingY, TileWidth, TileHeight, WorldPositionX, WorldPositionY, ScaleX, ScaleY
    ctx.drawImage(img, obj.framePosition * obj.tileSizeWidth, 0, 
        obj.tileSizeWidth, obj.tileSizeHeight, 
        obj.x - (.5 * obj.w), obj.y - (.5 * obj.w), 
        obj.w, obj.h);

    obj.framePosition += 1;
    if (obj.framePosition > obj.frames) {
        obj.framePosition = 0;
    }
}