import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'; // Mengganti 'Switch' dengan 'Routes'

import Login from './App';
import Sidebar from './components/Sidebar/index';
import sidebar_menu from './constants/sidebar-menu';
import Admin from './pages/Admin';
// Import halaman-halaman yang akan digunakan
import Dashboard from './pages/Dashboard';
import History from './pages/History/history';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Front from './ZFRONTEND/frontindex';

function App() {
  return (
    <Router>
    <Routes>
    
      {/* <Route path = "/" element= {<Loginuser/>} /> */}
      <Route path='/' element= {<Front/>} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin/*"
        element={
          <div className='dashboard-container'>
            <Sidebar menu={sidebar_menu} />
            <div className='dashboard-body'>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element ={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<Products />} />
              <Route path="admin" element={<Admin />} />
              <Route path="history" element={<History />} />
            </Routes>
            </div>
          </div>
        }
      />
    </Routes>
  </Router>
  );
}

export default App;

