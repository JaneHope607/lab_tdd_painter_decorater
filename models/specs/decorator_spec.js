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

    it('should be able to calculate total litres paint in stock', function() {
        decorator.addPaint(paint);
        const actual = decorator.totalLitres()
        assert.deepStrictEqual(actual, 10)
    });

    it('should calculate if has enough paint to paint room', function() {
        decorator.addPaint(paint);
        const actual = decorator.isEnoughPaint(room);
        assert.strictEqual(actual, true)
    });

    // it('should be able to decrease paint stock when painting', function() {
    //     decorator.addPaint(paint);
    //     decorator.addPaint(paint);
    //     decorator.decreasePaintStock(room);
    //     const actual = decorator.totalLitres();
    //     assert.deepStrictEqual(actual, 20)
    // });

    it('should be able to paint room if enough paint', function() {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        const actual = decorator.paintRoom(room);
        assert.deepStrictEqual(actual, true)
    });

});