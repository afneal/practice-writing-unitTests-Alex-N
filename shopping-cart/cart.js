cart = [];
function addItem(cart, item, quantity) {
   if(quantity > 0) {cart.push({
    name: item, 
    quantity: quantity
   })};
}
   

addItem(cart, "eggs", 1);


console.log(cart);


function removeItem(cart, item) {
    let itemIndex = cart.findIndex(currentItem => currentItem.name === item);
    if(itemIndex >-1) {
        cart.splice(itemIndex, 1);
    }else if (item === "last") {
            cart.pop();
        }
    
    return cart;
    }

console.log(cart);

// removeItem(cart, "eggs");
function getTotalItems(cart) {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

console.log(cart);

console.log("Total number of items in cart is: ", getTotalItems(cart));

module.exports = {addItem, removeItem, getTotalItems};
