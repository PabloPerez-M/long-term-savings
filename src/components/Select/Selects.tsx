import React from "react";
import { iSelect } from "../../interface";

const SelectComponent: React.FC<iSelect> = ({ id, onChange, value, options, label }) => {

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select id={id} onChange={onChange} value={value} >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </>
    );
}

export default SelectComponent;