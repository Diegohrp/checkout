import React from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
} from '@paypal/react-paypal-js';

const PaypalPay = ({ getTotalPurchase, onSuccess }) => {
  const initialOptions = {
    'client-id': process.env.PAYPAL_CLIENT_ID,
    currency: 'USD',
    intent: 'capture',
  };
  const onCreateOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: Number.parseFloat(getTotalPurchase()).toFixed(2),
            },
          },
        ],
      })
      .then((orderId) => orderId);
  };

  const onAprove = (data, actions) => {
    return actions.order
      .capture()
      .then((data) => {
        onSuccess(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        fundingSource="paypal"
        style={{ layout: 'vertical' }}
        disabled={false}
        createOrder={onCreateOrder}
        onApprove={onAprove}
      />
    </PayPalScriptProvider>
  );
};

export { PaypalPay };
