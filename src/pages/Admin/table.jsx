import React from "react";
import './table.css';


const Table = () => {
    return (
<div>
            <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nama</th>
                <th>Email</th>
                <th>No Telp</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>123-456-7890</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>987-654-3210</td>
            </tr>
           
        </tbody>
    </table>
            </div>
    );
}

export default Table;