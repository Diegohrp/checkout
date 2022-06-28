import React from 'react';
import '../styles/components/Success.css';
function Success() {
  return (
    <section className="Success">
      <div className="Success-content">
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>

        <div className="success-map">Google Maps</div>
      </div>
    </section>
  );
}

export {Success};
