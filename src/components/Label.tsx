import React from "react";
import { ilabel } from "./interface/iLabel";

const LabelComponent: React.FC<ilabel> = ({ id, text }) => {
    return (
        <label id={id}>{text}</label>
    );
}

export default LabelComponent;