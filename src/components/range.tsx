import React, { useState } from "react"

const Range: React.FC = () => {
    const rate: number = .1398/360;
    const [amount, setAmount] = useState<number>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = parseInt(event.target.value)
        setAmount(newAmount) 
    }

    const verificatedType = (event: React.ChangeEvent<HTMLInputElement>) => {
        let typePerformance = document.getElementById('typePerformance');
        const newTypePerformance = event.target.value
    }

    return (
        <div>
            <label htmlFor="typePerformance">Selecciona el tipo de depositos que haras: </label>
            <select id="typePermorfance">
                <option value="month">Cada mes</option>
                <option value="only">Unica vez</option>
            </select>
            <br />
            <br />
            <label id="amount">Monto: ${amount}</label><br />
            <label id="min">$500</label>
            <output id="outVal" className="outVal"></output>
            <input id="range" type="range" min="500" max="23000" step="500" onChange={handleChange}/>
            {/* onChange={document.getElementById('outVal').value = value} */}
            <label id="max">$23000</label>
            <br />
            <label htmlFor="selectYears">Tiempo: </label>
            <select id="selectYears">
                <option value="one">1 año</option>
                <option value="two">2 años</option>
                <option value="five">5 años</option>
            </select>
            <br />
            <p id="deposit">Tu deposito: ${ }</p>
            <p id="performance">Rendimientos acumulados: ${ }</p>
            <p id="total">Al finalizar tendras: ${ }</p>
        </div>
    )
}



export default Range;
