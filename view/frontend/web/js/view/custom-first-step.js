define([
    'ko',
    'uiComponent',
    'underscore',
    'Magento_Checkout/js/model/step-navigator'
], function (ko, Component, _, stepNavigator) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'JesseHanson_CustomCheckoutStep/custom-first-step'
        },

        // add here your logic to display step,
        isVisible: ko.observable(true),

        /**
         * @returns {*}
         */
        initialize: function () {
            this._super();


            stepNavigator.registerStep(
                'custom-first-step',
                null,
                'Custom First Step',
                this.isVisible,
                _.bind(this.navigate, this),
                1
            );

            return this;
        },

        /**
         * The navigate() method is responsible for navigation between checkout steps
         * during checkout. You can add custom logic, for example some conditions
         * for switching to your custom step
         * When the user navigates to the custom step via url anchor or back button we_must show step manually here
         */
        navigate: function () {
            this.isVisible(true);
        },

        /**
         * @returns void
         */
        navigateToNextStep: function () {
            stepNavigator.next();
        }
    });
});
