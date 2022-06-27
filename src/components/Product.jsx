import React from 'react';

function Product({product}) {
  return (
    <article className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span> ${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button">Comprar</button>
    </article>
  );
}

export {Product};
