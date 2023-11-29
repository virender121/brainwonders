import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductContext } from '../../components/ProductContext/ProductContext';

const ProductDetailPage = () => {
    const { id } = useParams();
    const { product, loading, fetchProductDetails } = useProductContext();
  
    useEffect(() => {
      fetchProductDetails(id);
    }, [id, fetchProductDetails]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h6>${product.price}</h6>
      {product.images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
      <p>{product.rating}</p>
      <p>Items in stock: {product.stock}</p>
      <p>Discount offered: {product.discountPercentage}%</p>
      <Link to={'/users'}>View Users</Link>
    </div>
  );
};

export default ProductDetailPage;
