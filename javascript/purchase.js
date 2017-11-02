

$(function () {

    function Device(name, price) {
        this.name = name;
        this.price = price;
        this.calc = function (amount) {
            return calcPrice(amount, this.price);
        };
        function getPrice(){return this.price;}
    }
    var android = new Device("Engie device for Android", 20);
    var ios = new Device("Engie device for iPhone", 25);

    $(".section-shoppingCart").hide();
    document.getElementById("iosQuantity").addEventListener("change", checkout);
    document.getElementById("androidQuantity").addEventListener("change", checkout);

    $("#checkoutAndroid").click(checkout);
    $("#checkoutIOS").click(checkout);

    $(".clearIos").click(function () {
        $("#iosQuantity").val(0);
        checkout($("#iosQuantity").val());
    });//Clear ios button functionality
    $(".clearAndroid").click(function () {
        $("#androidQuantity").val(0);
        checkout($("#androidQuantity").val());
    });//clear android button functionality

    function checkout() {
        var androidQuantity = $("#androidQuantity").val();
        var iosQuantity = $("#iosQuantity").val();

        $(".section-shoppingCart").show();
        $("#iosNum").text(iosQuantity);
        $("#androidNum").text(androidQuantity);
        $("#totalTotal").text("Total: " + (android.calc(androidQuantity)+ios.calc(iosQuantity)) + "$");
        }

    function calcPrice(amount, price) {
            if (amount > 1)
                return (price* 0.75) + (price * (amount - 1));
            else if(amount == 1)
                return price;
            else
                return 0;
        }
    $("#hide").click(function(){$(".section-shoppingCart").hide()});
});