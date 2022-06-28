import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';
import { AppContext } from '../context/AppContext';
function Information() {
  const {
    state: { cart },
    addToBuy,
  } = React.useContext(AppContext);
  const form = React.useRef(null);

  const handleSubmit = () => {
    //e.preventDefault();
    const formData = new FormData(form.current);
    const buyer = Object.fromEntries(formData);
    addToBuy(buyer);
  };

  return (
    <section className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input
              type="text"
              placeholder="Nombre completo"
              name="name"
            />
            <input
              type="text"
              placeholder="Correo Electrónico"
              name="email"
            />
            <input
              type="text"
              placeholder="Dirección"
              name="address"
            />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input
              type="number"
              placeholder="Código postal"
              name="cp"
            />
            <input
              type="number"
              placeholder="Teléfono"
              name="phone"
            />
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="checkout">
            <div className="Information-back">Regresar</div>
          </Link>

          <button
            className="Information-next"
            type="button"
            onClick={handleSubmit}>
            Pagar
          </button>
        </div>
      </div>
      <div className="information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item, index) => (
          <div className="Information-item" key={index}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Information };
