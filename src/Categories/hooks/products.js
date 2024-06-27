import React from 'react';
import { useGetProducts } from './useGetProducts'; // Adjust the path as needed

const Products = () => {
  const { products, error } = useGetProducts();

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: '200px' }} />
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
