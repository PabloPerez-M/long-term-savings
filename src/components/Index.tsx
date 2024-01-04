import React, { useEffect, useState } from "react";
// import { iParagraph } from "./interface/iParagraph";
import TextResult from "./Paragraph";
import SelectComponent from "./selects";

const optionsTypeDeposit = [
  {value: "month", text: "Cada mes"},
  {value: "only", text: "Unica vez"},
];

const optionsTime = [
  {value: 1, text: "1 año"},
  {value: 2, text: "2 años"},
  {value: 5, text: "5 años"},
]

const Index: React.FC = () => {
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

  useEffect(() => {
    console.log(time);
  }, [time]);

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  useEffect(() => {
    console.log(typeDeposit);
  }, [typeDeposit]);

  return (
    <div className="container">
      <div className="typeContainer">
        <SelectComponent label="Tipo de deposito: " id="typeMonetaryReturn" onChange={typeChange} value={typeDeposit} options={optionsTypeDeposit}/>
      </div>
      <div className="rangeContainer">
        <label className="labelAmount">Monto: </label>
        <div className="infRangeCont">
          <div className="divAmount">
            <label id="amount">${amount}</label>
          </div>
          <div className="divMax">
            <label id="max">$23000</label>
          </div>
        </div>
        <div>
          <input
            id="range"
            type="range"
            min="500"
            max="23000"
            step="500"
            onChange={handleChange}
          />
        </div>
      </div>


      <div className="timeContainer">
        <SelectComponent label="Tiempo: "  id="selectYears" onChange={timeChange} value={time} options={optionsTime} />
      </div>

      <div className="dataContainer">
        <TextResult id="deposit" text="Tu deposito: " value={opeDep(amount)}/>
        <TextResult id="monetaryReturn" text="Rendimientos acumulados: " value={accRen()}/>
        <TextResult id="total" text="Al finalizar tendras: " value={operation(amount)}/>
      </div>
    </div>
  );
};

export default Index;
