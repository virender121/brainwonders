import { Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage/ProductPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import './App.css'
import { ProductProvider } from './components/ProductContext/ProductContext';
import Users from './pages/users/Users';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Provider store={store}>
      <ProductProvider>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/detail/:id" element={<ProductDetailPage />} />
            <Route path="/users" element={<Users />} />
          </Routes>
          </ProductProvider>
        {/* <ProductPage /> */}
      </Provider>
    </div>
  );
}

export default App;
