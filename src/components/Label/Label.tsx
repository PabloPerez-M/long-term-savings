import React from "react";
import { iLabel } from "../../interface";
import "./label.css";

const LabelComponent: React.FC<iLabel> = ({ className,id, text }) => {
    return (
        <div className={className}>
            <label id={id}>{text}</label>
        </div>
    );
}

export default LabelComponent;