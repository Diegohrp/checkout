import React from 'react';
import {Product} from './Product';
import '../styles/components/Products.css';

function Products({products}) {
  return (
    <section className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export {Products};
