
function updateCartAndroid(quantity) {
    var totalPrice = 0;
    if (quantity > 1)
        totalPrice = ((20*0.75) + (20*(quantity-1)));
    else
        totalPrice = 20;
    return totalPrice;

}