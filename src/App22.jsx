import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import App from './App';
import Sidebar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import History from './pages/History/history';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Cek from './ZFRONTEND/Cek/cek';
import Front from './ZFRONTEND/frontindex';

function AdminHome() {
 

  return (
    <Router>
      <Routes>
       <Route path ="/" element ={<App/>} />
       <Route path='/frontend' element = {<Front/>} />
       <Route path='/cek' element = {<Cek/>} />
       <Route path='/home' element = {<Home/>} />
       <Route exact path="/home/1" element={<Dashboard />} />
    <Route exact path="/home/2" element={<Orders />} />
    <Route exact path="/home/3" element={<Products />} />
    <Route exact path="/home/4" element={<History />} />
    <Route exact path="/home/5" element={<Admin/>} />
       
       </Routes>

    </Router>
  );
}

function Home() {
  return(

 <div className='dashboard-container'>
<Sidebar menu={sidebar_menu} />
<div className='dashboard-body'>
  <Routes>
    <Route exact path="/home/1" element={<Dashboard />} />
    <Route exact path="/home/2" element={<Orders />} />
    <Route exact path="/home/3" element={<Products />} />
    <Route exact path="/home/4" element={<History />} />
    <Route exact path="/home/5" element={<Admin/>} />
  </Routes>
 
</div>
</div>

  )

}

export default AdminHome;


















// import './App.css';

// import React from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from 'react-router-dom';

// import Login from './components/Login/login';
// import SideBar from './components/Sidebar';
// import sidebar_menu from './constants/sidebar-menu';
// import Admin from './pages/Admin';
// import Dashboard from './pages/Dashboard';
// import Orders from './pages/Orders';
// import Products from './pages/Products';

// function App () {
//   return(
//     <Router>
//       <div className='dashboard-container'>
//         <SideBar menu={sidebar_menu} />
//           <div className='dashboard-body'>
//               <Routes>
//                   <Route path="*" element={<div></div>} />
//                   <Route exact path="/dashboard" element={<Dashboard />} />
//                   <Route exact path="/orders" element={< Orders />} />
//                   <Route exact path="/products" element={<Products />} />
//                   <Route exact path="/admin" element={<Admin />} />
//                   <Route exact path="/login" element={<Login />} />
//               </Routes>
//           </div>
//       </div>
//     </Router>
//   )
// }

// export default App;











// import './App.css';

// import React from 'react';

// import {
//   BrowserRouter as Router,
//   Outlet,
//   Route,
//   Routes,
// } from 'react-router-dom';

// import App from './App';
// import Sidebar from './components/Sidebar';
// import sidebar_menu from './constants/sidebar-menu';
// import Admin from './pages/Admin';
// import Dashboard from './pages/Dashboard';
// import History from './pages/History/history';
// import Orders from './pages/Orders';
// import Products from './pages/Products';
// import Cek from './ZFRONTEND/Cek/cek';
// import Front from './ZFRONTEND/frontindex';

// function AdminHome() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Outlet />}>
//           <Route path="/" element={<App />} />
//           <Route path="home" element={<Dashboard />} />
//           <Route path="frontend" element={<Front />} />
//           <Route path="cek" element={<Cek />} />
//         </Route>
//       </Routes>
//       <div className='dashboard-container'>
//         <Routes>
//           <Route path="home" element={<Sidebar menu={sidebar_menu} />} />
//           <Route path="/" element={<div />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="products" element={<Products />} />
//           <Route path="admin" element={<Admin />} />
//           <Route path="history" element={<History />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default AdminHome;
