import React from 'react';
import { Product } from './Product';
import '../styles/components/Products.css';
import { AppContext } from '../context/AppContext';
function Products() {
  const { state, addToCart } = React.useContext(AppContext);
  const products = state.products;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export { Products };
