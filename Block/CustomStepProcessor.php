<?php

namespace JesseHanson\CustomCheckoutStep\Block;

use Magento\Framework\App\Http\Context;
use Magento\Framework\Stdlib\ArrayManager;
use Magento\Framework\Url\Helper\Data;
use Magento\Checkout\Block\Checkout\LayoutProcessorInterface;
use Magento\Customer\Model\Context as CustomerContext;
use Magento\Customer\Model\Url;

class CustomStepProcessor implements LayoutProcessorInterface
{

    /**
     * @inheritdoc
     */
    public function process($jsLayout): array
    {

        $inputs = [
            'engraving' => [
                'component' => 'Magento_Ui/js/form/element/abstract',
                'config' => [
                    'template' => 'ui/form/field',
                    'elementTmpl' => 'ui/form/element/input'
                ],
                'label' => 'Engraving Text',
                'provider' => 'checkoutProvider',
                'visible' => 1,
            ]
        ];

        foreach($inputs as $code => $config) {
            $jsLayout['components']['checkout']['children']['steps']['children']
                ['custom-first-step']['children']['custom-step-form-fields']['children'][$code] = $config;
        }

        return $jsLayout;
    }
}
