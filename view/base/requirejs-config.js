var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'JesseHanson_CustomCheckoutStep/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'JesseHanson_CustomCheckoutStep/js/view/shipping-payment-mixin': true
            }
        }
    }
};
