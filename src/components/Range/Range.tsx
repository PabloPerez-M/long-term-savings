import React from "react";
import { iRange } from "../../interface";

const Range: React.FC<iRange> = ({ id, type, min, max, step, onChange }) => {
    return (
        <input id={id} type={type} min={min} max={max} step={step} onChange={onChange} />
    );
}

export default Range;