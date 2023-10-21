import React, {useState} from "react";
import './form.css';

const Form = () => {
    const [data, setData] = useState({name:"", telepon:"", alamat:"", message:""});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <form method="post" onSubmit={handleSubmit}>
            <h1>Form Pemesanan</h1>
            <input type="text"  name="name" id="" onChange={handleChange} value={data.name} placeholder="Masukkan Nama"/>
            <input type="phone"  name="telepon" id="" onChange={handleChange} value={data.telepon} placeholder="+62"/>
            <input type="address"  name="alamat" id="" onChange={handleChange} value={data.alamat} placeholder="Masukkan Alamat Pengiriman"/>
        </form>
    )
}

export default Form;