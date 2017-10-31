

$(function () {

    $(".section-shoppingCart").hide();

    $("#checkoutAndroid").click(checkout);
    $("#checkoutIOS").click(checkout);

    function checkout() {
        var androidQuantity = $("#androidQuantity").val();
        var iosQuantity = $("#iosQuantity").val();

        var androidTotalPrice = calcPrice(androidQuantity, 20);
        var iosTotalPrice = calcPrice(iosQuantity, 25);
        var totalPrice = androidTotalPrice + iosTotalPrice;

        $(".section-shoppingCart").show();
        $("#iosNum").text(iosQuantity);
        $("#androidNum").text(androidQuantity);
        $("#totalTotal").text("Total: " + (totalPrice) + "$");

    }
    function calcPrice(amount, price) {
        if (amount > 1)
            return (price* 0.75) + (price * (amount - 1));
        else if(amount == 1)
            return price;
        else
            return 0;
    }
});

