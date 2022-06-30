import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Payment.css';
import { PaypalPay } from './Paypal';

function Payment() {
  const {
    state: { cart, buyer },
    addOrder,
  } = React.useContext(AppContext);
  const navigate = useNavigate();

  const getTotalPurchase = () => {
    const reducer = (accumulator, initialValue) =>
      accumulator + initialValue.price;
    return cart.reduce(reducer, 0);
  };

  const handlePaymentSuccess = (order) => {
    if (order.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        cart,
        payment: order,
      };
      addOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <h3>Total a pagar: ${getTotalPurchase()}</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PaypalPay
            getTotalPurchase={getTotalPurchase}
            onSuccess={handlePaymentSuccess}
          />
        </div>
      </div>
    </section>
  );
}

export { Payment };
