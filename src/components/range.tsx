import React, { useEffect, useState } from "react";

const Range: React.FC = () => {
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

  // const verificatedType = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     let typePerformance = document.getElementById('typePerformance');
  //     const newTypePerformance = event.target.value
  // }

  return (
    <div className="container">
      <div className="typeContainer">
        <label htmlFor="typePerformance">
          Selecciona el tipo de deposito que haras:{" "}
        </label>
        <select id="typePermorfance" onChange={typeChange} value={typeDeposit}>
          <option value="month">Cada mes</option>
          <option value="only">Unica vez</option>
        </select>
      </div>
      <div className="rangeContainer">
        <label className="labelMonto">Monto: </label>
        <div className="infRangeCont">
          <div className="monto">
            <label id="amount">${amount}</label>
          </div>
          <div className="maxi">
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
        <label htmlFor="selectYears">Tiempo: </label>
        <select id="selectYears" onChange={timeChange} value={time}>
          <option value={1}>1 año</option>
          <option value={2}>2 años</option>
          <option value={5}>5 años</option>
        </select>
      </div>

      <div className="dataContainer">
        <p id="deposit">Tu deposito: ${String(opeDep(amount))}</p>
        <p id="performance">
          Rendimientos acumulados: ${String(accRen().toFixed(2))}
        </p>
        <p id="total">
          Al finalizar tendras: ${String(operation(amount)?.toFixed(2))}
        </p>
      </div>
    </div>
  );
};

export default Range;
