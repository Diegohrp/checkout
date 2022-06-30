import React from 'react';
import '../styles/components/Success.css';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import { useGoogleAddress } from '../hooks/useGoogleAddress';

function Success() {
  const {
    state: { buyer },
  } = React.useContext(AppContext);

  const location = useGoogleAddress(buyer[0].address);

  return (
    <section className="Success">
      <div className="Success-content">
        <h2>{buyer[0]?.name} Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>

        <div className="success-map">
          <Map data={location} />
        </div>
      </div>
    </section>
  );
}

export { Success };
