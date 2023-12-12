// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import { getProductsByCategory, getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();

        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
