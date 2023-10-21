import React, {useState} from "react";
import Select from "react-dropdown-select";

function Dropdown() {
    const [value, setvalue] = useState()
    const options = [
        {id: "Panci", harga:"", name: 1},
        {id: "Piring", harga:"", name: 2},
        {id: "Meja", harga:"", name: 4},
        {id: "Sofa", harga:"", name: 5},
        {id: "Lemari", harga:"", name: 6},
        {id: "Buah", harga:"", name: 7},
        {id: "Beras", harga:"", name: 8},
        {id: "Mie", harga:"2500", name: 9},
        {id: "Oli", harga:"", name: 10},
        {id: "Spare Part", harga:"", name: 11},
        {id: "Aki", harga:"", name: 12}
    ]
    return (
        <div className="dropdownForm">
            <div className="dropdownDrop">
                <Select 
                    name="select" 
                    options={options} 
                    labelField="id" 
                    valueField="name" 
                    multi 
                    onChange={value => setvalue(value)}
                    color="skyblue"
                    dropdownPosition="bottom"
                    searchable="true"
                    >
                </Select>
            </div>
        </div>
    )
}

export default Dropdown;