const Decorator = function() {
    this.stock = [];
};

Decorator.prototype.addPaint = function(paint) {
    this.stock.push(paint);
};

Decorator.prototype.totalLitres = function() {
    let total = 0
    for (litre in this.stock) {
        total += litre.litres;
    };
    return total; 
};

module.exports = Decorator;