class MarchingBall extends Circle {
    constructor(x, y, r, px, py, color="#000", pcolor = "cyan") {
        super(x, y, r, color);
        this.px = px;
        this.py = py;
        this.pcolor = pcolor;
    }

    draw(context, displayBall = true, displayLine = true) {
        if(displayBall) context.fillCircle(this.x, this.y, this.r, this.color, 0.2);
        if(displayBall) context.drawCircle(this.x, this.y, this.r, this.color, 2, 0.7);
        if(displayLine) context.drawLine(this.x, this.y, this.px, this.py, "cyan");
    }
}

const MAXRAYS = 100;
class Ray {
    constructor(pos, dir) { // in radians
        this.pos = pos;
        this.dir = dir;
    }

    draw() {

    }

    castToObject() {

    }

    static cast(pos, dir) {
        let prevPoint = pos;
        for(let i=0; i<MAXRAYS; i++) {
            let R = Math.min(...objects.map(obj => marchToShape(prevPoint, obj))); //get distance to every object in the scene, select lowest
            let newPoint = Math.distance.circleRay(new Circle(prevPoint.x, prevPoint.y, R), dir);
            if(R <= 0.5) return newPoint; // if distance is lower than 0.5, then we hit something
            if(R > 1000) return undefined; // ray left the scene
            prevPoint = newPoint;
        }
        return prevPoint; // reached the limit of rays
    }
}