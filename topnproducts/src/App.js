import './App.css';
import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
       

      <Router>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/detail" element={<ProductDetailPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
