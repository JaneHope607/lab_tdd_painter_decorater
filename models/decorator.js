const Decorator = function() {
    this.stock = [];
};

Decorator.prototype.addPaint = function(paint) {
    this.stock.push(paint);
};

Decorator.prototype.totalLitres = function() {
    let total = 0
    for (var litre of this.stock) {
        total += litre.litres;
    };
    return total; 
};


Decorator.prototype.isEnoughPaint = function(room) {
   if (room.area <= this.totalLitres()) {
       return true;
   } else {
       return false;
   }
};

// Decorator.prototype.decreasePaintStock = function(room) {
//     return this.totalLitres() -= room.area;
// };

Decorator.prototype.paintRoom = function(room) {
    if (this.isEnoughPaint(room)) {
        room.paint();
        return true
    } else {
        return false;
    }
};


module.exports = Decorator;