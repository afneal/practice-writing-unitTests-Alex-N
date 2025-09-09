const {addItem, removeItem, getTotalItems} = require('../shopping-cart/cart.js');


//positive addItem
describe ("addItem", function() {
    test("should add item to cart", function(){
        addItem(cart, "bread", 4);
        expect(cart).toEqual([{name: 'eggs', quantity: 1}, {name: 'bread', quantity: 4}])});
    });


//negative addItem
describe ("addItem", function() {
    test("should not add item to cart", function(){
        addItem(cart, "milk", -1);
        expect(cart).toEqual([{name: 'eggs', quantity: 1},{name: 'bread', quantity: 4}]);
    });
})

//edge case addItem
describe ("addItem", function() {
    test("should not add item to cart", function(){
        addItem(cart, "milk", 0);
        expect(cart).toEqual([{name: 'eggs', quantity: 1}, {name: 'bread', quantity: 4}]);
    });
})


//positive removeItem
describe ("removeItem", function() {
    test("should remove item from cart", function(){
        removeItem(cart, "bread");
        expect(cart).toEqual([{name: 'eggs', quantity: 1}]);
    });
})

//negative removeItem
describe("removeItem", function() {
    test("should not remove item", function() {
        removeItem(cart, "beef");
        expect(cart).toEqual([{name: 'eggs', quantity: 1}]);
    });
})

//edge case removeItem
describe("removeItem", function() {
    test("should remove the last item from the cart", function() {
        removeItem(cart, "last");
        expect(cart).toEqual([]);
    })
})

//negative handle and empty cart
describe("getTotalItems", function() {
    test("should handle an empty cart", function() {
        getTotalItems(cart);
        expect(cart).toEqual([]);
    })
})

//positive calculate total number of items correctly
describe("getTotalItems", function() {
    test("should calculate total number of items correctly", function() {
        addItem(cart, "cheese", 4);
        getTotalItems(cart);
        expect(cart).toEqual([{name: 'cheese', quantity: 4}]);
    });

})

//edge case calculate with large quantities
describe("getTotalItems", function() {
    test("should calcualte with large quantities", function() {
        addItem(cart, "bacon", 500000);
        getTotalItems(cart);
        expect(cart).toEqual([{name: 'cheese', quantity: 4}, {name: 'bacon', quantity: 500000}]);
    });
})