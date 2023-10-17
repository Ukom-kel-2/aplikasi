import Sidebar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import React from 'react';
import './App.css';
const Admins = () => {
    return ( 
        <div className='dashboard-container'>
       
        <div className='dashboard-body'>
        <Sidebar menu={sidebar_menu} />

        </div>
        </div>

    )}
    export default Admins;