import './style.css';

import React from 'react';
import Table from './table.jsx';

const Admin = () => {
    return (
        <div className="dashboard">
            <h2>Admin Dashboard</h2>
            <ul className="admin-list">
                <li className="admin-list-item">
                    <span className="admin-name">Admin 1</span>
                    <button className="admin-delete-button">Delete</button>
                    <input className="admin-input" type="text" placeholder="Edit Name" />
                </li>
                <li className="admin-list-item">
                    <span className="admin-name">Admin 2</span>
                    <button className="admin-delete-button">Delete</button>
                    <input className="admin-input" type="text" placeholder="Edit Name" />
                </li>
                {/* Tambahkan item admin lainnya sesuai kebutuhan */}
            </ul>
            <button className="add-admin-button">Add Admin</button>

            <div>
                <Table/>
            </div>
        </div>
        
    );
}

export default Admin;
