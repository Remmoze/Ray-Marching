function marchToShape(target, shape) {
    switch(shape.type) {
        case "circle": return Math.distance.point2Circle(target.pos, shape);
        case "rect": {
            let reg = shape.getRegion(target.pos);
            if(reg == 4) return 0;
            switch(reg) {
                case 1: return shape.top - target.y;
                case 3: return shape.left - target.x;
                case 5: return target.x - shape.right;
                case 7: return target.y - shape.bottom;
                default: return Math.distance.points2(target.pos, shape.p(reg));
            }
        }
    }
}