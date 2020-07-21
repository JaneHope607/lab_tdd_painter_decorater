const assert = require('assert')
const Decorator = require('../decorator')
const Room = require('../room')
const Paint = require('../paint')

describe('Decorator', function() {

    let decorator;
    let paint;
    let room;

    beforeEach(function() {
        decorator = new Decorator();
        paint = new Paint(10);
        room = new Room(10);
    });

    it('should return empty stock', function() {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a can of paint to paint stock', function() {
        decorator.addPaint(paint);
        const actual = decorator.stock.length;
        assert.deepStrictEqual(actual, 1)
    });


});