import React from "react";
import { iParagraph } from "../../interface";
import "./paragraph.css";

const TextResult: React.FC<iParagraph> = ({ value, text, id }) => {
    return (
        <p id={id}>{text} ${String(value.toFixed(2))}</p>
    );
};

export default TextResult;