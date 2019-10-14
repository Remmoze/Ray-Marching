let Mouse = new Point(0, 0);
let updateMouse = e => {
    Mouse.x = e.pageX - canvas.offsetTop;
    Mouse.y = e.pageY - canvas.offsetLeft;
}

window.addEventListener("mousedown", e => {
    updateMouse(e);
    recalculateScene();
});
window.addEventListener("mousemove", e => {
    updateMouse(e);

    if(!e.ctrlKey) {
        Player.x = Mouse.x;
        Player.y = Mouse.y;
    } else {
        Player.dir = Math.atan2(Mouse.y - Player.y, Mouse.x - Player.x);
    }
    recalculateScene();
})

window.addEventListener('keydown', e => {
    if(e.code == "KeyQ") addObject(Mouse.x, Mouse.y, "circle")
    if(e.code == "KeyE") addObject(Mouse.x, Mouse.y, "rect")
    
    recalculateScene();
});