class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    subtract(p) {
        return new Point(this.x - p.x, this.y - p.y);
    }

    add(p) {
        return new Point(this.x + p.x, this.y + p.y);
    }

    get pos() {return this;}

    get length() { 
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

class Shape {
    constructor(type) {
        this.type = type;
    }

    draw(context) {}
}

class Circle extends Shape {
    constructor(x, y, radius, color = "#000") {
        super("circle");
        this.x = x;
        this.y = y;
        this.r = radius;
        this.c = color;
    }

    get center() {return new Point(this.x, this.y)}
    get pos() {return this.center()}

    draw(context) {
        context.fillCircle(this.x, this.y, this.r, this.c);
    }
}

class Rect extends Shape {
    constructor(x, y, width, height, color = "#000") {
        super("rect")
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.c = color;
        this.p = i => {
            switch(i){
                case 0: return new Point(this.left, this.top);
                case 2: return new Point(this.right, this.top);
                case 6: return new Point(this.left, this.bottom);
                case 8: return new Point(this.right, this.bottom);
            }
        }
    }

    get left() {return this.x;}
    get top() {return this.y;}
    get right() {return this.x+this.width}
    get bottom() {return this.y+this.height}

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height)
    }

    isInBounds(p) {
        return p.x < this.right && p.x >= this.left &&
               p.y < this.bottom && p.y >= this.top;
    }

    getRegion(p) {
        let getx = x => {
            if(x < this.left) return 0;
            if(x <= this.right) return 1;
            return 2;
        }
        let gety = y => {
            if(y < this.top) return 0;
            if(y <= this.bottom) return 1;
            return 2;
        }
        return getx(p.x) % 3 + 3*gety(p.y); // x + 3*y
    }
    
}

class Entity extends Shape {
    constructor(x, y, dir) {
        super('entity');
        this.x = x;
        this.y = y;
        this.dir = dir; //direction in radians. clockwise.
    }

    get pos() {return new Point(this.x, this.y)}

    draw(context) {
        context.fillCircle(this.x, this.y, 5, "pink");
    }
}

Math.distance = {};
Math.distance.points2 = (p1, p2) => p1.subtract(p2).length;
Math.distance.point2Circle = (p, c) => c.center.subtract(p).length - c.r;
Math.distance.circleRay = (c, dir) => new Point(c.x + Math.cos(dir) * c.r, c.y + Math.sin(dir) * c.r);
Math.distance.playerRay = (p, R) => Math.distance.circleRay(new Circle(p.x, p.y, R), p.dir);