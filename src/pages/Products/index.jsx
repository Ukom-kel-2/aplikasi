import './styleses.css';

import React, {useState} from 'react';
import DashboardHeaders from '../../components/DashboardHeader/index-1';

const Products = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
    return (
<div className="dasboard-content">
<DashboardHeaders
                btnText="Add Item" onClick={toggleForm} />
                            {showForm && (
 <div className="center-form">
 <form className="item-form">
   <label htmlFor="productName">Nama Produk:</label>
   <input type="text" id="productName" name="productName" placeholder="Nama Barang" />

   <label htmlFor="productPrice">Jumlah Stok:</label>
   <input type="text" id="stok" name="stok" placeholder="Sok Barang" />
   <label htmlFor="productPrice">Product Price:</label>
   <input type="text" id="productPrice" name="productPrice" placeholder="Harga Barang" />

   <label htmlFor="productCategory">Product Category:</label>
   <select id="productCategory" name="productCategory">
     <option value="electronics">Konsumsi</option>
     <option value="clothing">Prabotan</option>
     <option value="home">Otomotif</option>
     <option value="other">Furnitur</option>
   </select>

   <button type="submit">Add</button>
 </form>
</div>
        )}

        <div className='dashboard-content-container'>
            <h2 id='aku'>Our Products</h2>

            <table id="customers">
  <tr>
    <th>Nama Product</th>
    <th>Stok</th>
    <th>Kategori</th>
    <th>harga</th>

  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
    <td>France</td>
  </tr>
</table>
        </div>
        </div>
        
    );
}

export default Products;


