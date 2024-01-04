import React, { useState } from "react";
import "./index.css";
import TextResult from "../Paragraph/Paragraph";
import SelectComponent from "../Select/Selects";
import LabelComponent from "../Label/Label";
import Range from "../Range/Range";
import { optionsTypeDeposit } from "../../constant/constants";
import { optionsTime } from "../../constant/constants";

const Layout: React.FC = () => {
  const [amount, setAmount] = useState<number>(500);
  const [time, setTime] = useState<number>(1);
   const [typeDeposit, setTypeDeposit] = useState<string>("month");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseInt(event.target.value);
    setAmount(newAmount);
  };

  const timeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTime = parseInt(event.target.value);
    setTime(newTime);
  };

  const typeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = String(event.target.value);
    setTypeDeposit(newType);
  };

  const operation = (amount: number) => {
    let n: number = 0;
    let r: number = 0;
    let result: number = 0;
    let rate: number = 0.1398 / 360;
    if (typeDeposit === "month") {
      for (let i = 0; i < 360 * time; i++) {
        if (i % 30 === 0) {
          n = n + amount;
        }
        r = n * rate;
        n = n + r;
        result = n;
      }
    } else {
      let onlyDeposit: number = amount;
      for (let i = 0; i < time; i++) {
        r = onlyDeposit * 0.15;
        onlyDeposit = onlyDeposit + r;
      }
      result = onlyDeposit;
    }
    return result;
  };

  const opeDep = (amount: number) => {
    return typeDeposit === "month" ? amount * 12 * time : amount;
  };

  const accRen = () => {
    return Number(operation(amount) - opeDep(amount));
  };

  return (
    <div className="container">
        <SelectComponent className="typeContainer" label="Tipo de deposito: " id="typeMonetaryReturn" onChange={typeChange} value={typeDeposit} options={optionsTypeDeposit} />
      <div className="rangeContainer">
        <LabelComponent className="labelAmount" id="labelAmount" text="Monto: " />
        <div className="infRangeCont">
            <LabelComponent className="divAmount" id="labelAmount" text={amount} />
            <LabelComponent className="divMax" id="max" text="$23000" />
        </div>
          <Range id="range" type="range" min="500" max="23000" step="500" onChange={handleChange} />
      </div>
        <SelectComponent className="timeContainer" label="Tiempo: " id="selectYears" onChange={timeChange} value={time} options={optionsTime} />
      <div className="dataContainer">
        <TextResult id="deposit" text="Tu deposito: " value={opeDep(amount)} />
        <TextResult id="monetaryReturn" text="Rendimientos acumulados: " value={accRen()} />
        <TextResult id="total" text="Al finalizar tendras: " value={operation(amount)} />
      </div>
    </div>
  );
};

export default Layout;
