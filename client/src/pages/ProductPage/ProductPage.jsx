import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setProducts } from '../../redux/productSlice';

import ProductCard from '../../components/ProductCard.jsx/ProductCard';

const ProductPage = () => {
    const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('/api/products');
      dispatch(setProducts(data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  return (
    <>
    <div className=" flex flex-wrap " style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',alignItems:'center'}}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
   
    </>
  );
};



export default ProductPage;
