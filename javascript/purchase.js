

var $androidQuan = $("#androidQuantity");
var $iosQuan = $("#iosQuantity");
$(document).ready(function (e) {

    $("checkoutIOS").click(updateCartIos($iosQuan));
    $("checkoutAndroid").click(updateCartAndroid($androidQuan));

    function updateCartAndroid(quantity) {
        var totalPrice = 0;
        if (quantity > 1)
            totalPrice = ((20 * 0.75) + (20 * (quantity - 1)));
        else
            totalPrice = 20;
        $();

    }
    function updateCartIos(quantity) {
        var totalPrice = 0;
        if (quantity > 1)
            totalPrice = ((25 * 0.75) + (25 * (quantity - 1)));
        else
            totalPrice = 25;

        return totalPrice;
    }



});