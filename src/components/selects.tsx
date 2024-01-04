import React from "react";
import { iSelect } from "./interface/iSelect";

const SelectComponent: React.FC<iSelect> = ({ id, onChange, value, options,label}) => {

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select id={id} onChange={onChange} value={value} >
                {options.map((option) => (
                    <option value={value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </>
    );
}

export default SelectComponent;