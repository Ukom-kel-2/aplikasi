import React, {useState} from "react";
import './text.css';

const Form = () => {
    const [data, setData] = useState({message:""});
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
            <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder="Masukkan Catatan Tambahan"/>
        </form>
    )
}

export default Form;