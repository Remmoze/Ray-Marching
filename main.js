const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');


populateScene(50);

draw = () => {
    context.fillAll("#222");
    drawScene(context);
    //requestAnimationFrame(draw);
}
draw();
