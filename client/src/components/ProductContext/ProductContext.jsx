import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProductDetails = async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching product details for ID ${id}:`, error);
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider value={{ product, loading, fetchProductDetails }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
