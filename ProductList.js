import React, { useContext } from 'react';
import Product from './Product';
import { ProductContext } from '../Contexts/ProductContext';


const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;
