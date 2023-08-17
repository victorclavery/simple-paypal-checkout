paypal.Buttons({
    style : {
        shape: 'pill'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units : [{
                amount: {
                    currency_code: "USD",
                    value: '0.1'
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            console.log(details)
            window.location.replace("http://localhost/paypal/success.php")
        })
    },
    onCancel: function (data) {
        window.location.replace("http://localhost/paypal/Oncancel.php")
    }
}).render('#paypal-payment-button');