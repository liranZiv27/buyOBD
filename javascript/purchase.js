

$(function () {

    $(".section-shoppingCart").hide();

    $('#checkoutAndroid').click(function () {
        var quan = $('#androidQuantity').val();
        var totalPrice = 0;
        if (quan > 1)
            totalPrice = ((20 * 0.75) + (20 * (quan - 1)));
        else if (quan == 1)
            totalPrice = 20;
        else
            totalPrice = 0;
        $(".section-shoppingCart").show();
        $("#androidNum").attr($(quan));
        $("#total").attr(totalPrice);
    });


    $('#checkoutIOS').click(updateCartIos($("#iosQuantity")));

    function updateCartAndroid(quantity) {
        var totalPrice = 0;
        if (quantity > 1) {
            totalPrice = ((20 * 0.75) + (20 * (quantity - 1)));
        }
        else {
            totalPrice = 20;
        }
    }
    function updateCartIos(quantity) {
        var totalPrice = 0;
        if (quantity > 1)
            totalPrice = ((25 * 0.75) + (25 * (quantity - 1)));
        else
            totalPrice = 25;
    }

});
