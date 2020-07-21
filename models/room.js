const Room = function(area) {
    this.area = area;
    this.painted = 0;
};

Room.prototype.paint = function(area) {
    this.painted += this.area;
};

module.exports = Room;