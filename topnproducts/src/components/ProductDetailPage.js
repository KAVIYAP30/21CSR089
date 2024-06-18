// src/components/ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const accessToken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkwNzU4LCJpYXQiOjE3MTg2OTA0NTgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM3YTI5MmY1LThmNmEtNDA3My1iMzA0LTYwOGZmYjU1NDU0NyIsInN1YiI6Imthdml5YXAuMjFjc2VAa29uZ3UuZWR1In0sImNvbXBhbnlOYW1lIjoiQWZmb3JkIG1lZGljYWxzIiwiY2xpZW50SUQiOiJjN2EyOTJmNS04ZjZhLTQwNzMtYjMwNC02MDhmZmI1NTQ1NDciLCJjbGllbnRTZWNyZXQiOiJmSEFrbE54aFB5QVNlTHBUIiwib3duZXJOYW1lIjoiS2F2aXlhIFAiLCJvd25lckVtYWlsIjoia2F2aXlhcC4yMWNzZUBrb25ndS5lZHUiLCJyb2xsTm8iOiIyMUNTUjA4OSJ9.9PkDGe_5dQDOeKzKqPXkfby54KriuP9bUn9cqt5YG8o';
  useEffect(() => {
    axios.get(`http://20.244.56.144/test/auth`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id, accessToken]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.company}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.rating}</p>
      <p>{product.discount}</p>
      <p>{product.availability}</p>
    </div>
  );
}

export default ProductDetailPage;
