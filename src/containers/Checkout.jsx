import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import { AppContext } from '../context/AppContext';

function Checkout() {
  const {
    state: { cart },
    removeFromCart,
  } = React.useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accum, currentValue) =>
      accum + currentValue.price;
    const total = cart.reduce(reducer, 0);
    return total;
  };

  return (
    <section className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de Pedidos</h3>
        ) : (
          <h3>No hay Pedidos</h3>
        )}
        {cart.map((item, index) => (
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button
              type="button"
              onClick={() => handleRemove(item.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio total:{handleSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </section>
  );
}

export { Checkout };
