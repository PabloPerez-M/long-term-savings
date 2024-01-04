import React from "react";
import { iRange } from "../../interface";
import "./range.css";

const Range: React.FC<iRange> = ({ id, type, min, max, step, onChange }) => {
    return (
        <div>
            <input id={id} type={type} min={min} max={max} step={step} onChange={onChange} />
        </div>
    );
}

export default Range;