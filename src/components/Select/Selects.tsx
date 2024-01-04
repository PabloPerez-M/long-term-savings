import React from "react";
import { iSelect } from "../../interface";

const SelectComponent: React.FC<iSelect> = ({className, id, onChange, value, options, label }) => {

    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <select id={id} onChange={onChange} value={value} >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
        
    );
}

export default SelectComponent;