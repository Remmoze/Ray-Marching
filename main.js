const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

//populateScene(50);

draw = () => {
    context.fillAll("#222");
    drawScene(context);

    
    //p.innerHTML = raySteps.length;
    //requestAnimationFrame(draw);
}
draw();


