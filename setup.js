CanvasRenderingContext2D.prototype.clear = function(color) {
    this.clearRect(0, 0, canvas.width, canvas.height);
}

CanvasRenderingContext2D.prototype.drawLine = function(x1, y1, x2, y2, color = "#ddd", width = 2, alpha = 1) {
    this.save();
    this.lineWidth = width;
    this.strokeStyle = color;
	this.globalAlpha = alpha;
    this.beginPath();
    this.moveTo(x1, y1);
    this.lineTo(x2, y2)
    this.stroke();
    this.restore();
}

CanvasRenderingContext2D.prototype.fillAll = function(color = "#222") {
    this.save();
    this.fillStyle = color;
    this.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.restore();
}

CanvasRenderingContext2D.prototype.fillCircle = function(x, y, radius, color, alpha = 1) {
    this.save();
    this.fillStyle = color;
	this.globalAlpha = alpha;
    this.beginPath();
    this.arc(x, y, radius, 0, 2 * Math.PI, false);
    this.fill();
    this.restore();
}

CanvasRenderingContext2D.prototype.drawCircle = function(x, y, radius, color = "white", width = 2, alpha = 1) {
    this.save()
    this.lineWidth = width;
    this.strokeStyle = color;
	this.globalAlpha = alpha
    this.beginPath();
    this.arc(x, y, radius, 0, 2 * Math.PI);
    this.stroke();
    this.restore();
}