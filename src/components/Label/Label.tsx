import React from "react";
import { iLabel } from "../../interface";

const LabelComponent: React.FC<iLabel> = ({ id, text }) => {
    return (
        <label id={id}>{text}</label>
    );
}

export default LabelComponent;