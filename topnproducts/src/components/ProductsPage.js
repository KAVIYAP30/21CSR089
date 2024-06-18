// src/components/ProductsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    category: '',
    company: '',
    minPrice: '',
    maxPrice: '',
  });
  const accessToken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkxNzc3LCJpYXQiOjE3MTg2OTE0NzcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM3YTI5MmY1LThmNmEtNDA3My1iMzA0LTYwOGZmYjU1NDU0NyIsInN1YiI6Imthdml5YXAuMjFjc2VAa29uZ3UuZWR1In0sImNvbXBhbnlOYW1lIjoiQWZmb3JkIG1lZGljYWxzIiwiY2xpZW50SUQiOiJjN2EyOTJmNS04ZjZhLTQwNzMtYjMwNC02MDhmZmI1NTQ1NDciLCJjbGllbnRTZWNyZXQiOiJmSEFrbE54aFB5QVNlTHBUIiwib3duZXJOYW1lIjoiS2F2aXlhIFAiLCJvd25lckVtYWlsIjoia2F2aXlhcC4yMWNzZUBrb25ndS5lZHUiLCJyb2xsTm8iOiIyMUNTUjA4OSJ9.doHvHxcQ96h_EThog-0i-URyrrvoTqsOv2HbrwoewyY';
  const fetchProducts = () => {
    const { company, category, minPrice, maxPrice } = filter;
    axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`,{
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchProducts();
  };

  return (
    <div>
      <h1>Top N Products</h1>
      <form onSubmit={handleFilterSubmit}>
        <label>
          Company:
          <select name="company" value={filter.company} onChange={handleFilterChange}>
            <option value="">Select Company</option>
            <option value="AMZ">AMZ</option>
            <option value="FLP">FLP</option>
            <option value="SNP">SNP</option>
            <option value="MYN">MYN</option>
            <option value="AZO">AZO</option>
          </select>
        </label>
        <label>
          Category:
          <select name="category" value={filter.category} onChange={handleFilterChange}>
            <option value="">Select Category</option>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
            <option value="TV">TV</option>
            <option value="Earphone">Earphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Charger">Charger</option>
            <option value="Mouse">Mouse</option>
            <option value="Keypad">Keypad</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Pendrive">Pendrive</option>
            <option value="Remote">Remote</option>
            <option value="Speaker">Speaker</option>
            <option value="Headset">Headset</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
          </select>
        </label>
        <label>
          Min Price:
          <input type="number" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} />
        </label>
        <label>
          Max Price:
          <input type="number" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} />
        </label>
        <button type="submit">Filter</button>
      </form>
      <div>
        {products.map(product => (
          <div key={product.id}>
            
            
              <h2>{product.productName}</h2>
              <p>{product.rating}</p>
              <p>{product.price}</p>
              <p>{product.discount}</p>
              <p>{product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
