import React, { useEffect, useState } from "react"

const Range: React.FC = () => {
    const [amount, setAmount] = useState<number>(500);
    const [time,setTime] = useState<number>(1);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = parseInt(event.target.value)
        setAmount(newAmount) 
    }

    const timeChange = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        const newTime = parseInt(event.target.value)
        console.log(newTime)
        setTime(newTime)
    }
    
    const operation = (amount:number|undefined)=>{
        let n:number=0;
        let r:number=0;
        let rate: number = .1398/360;
        for(let i=0;i<(360*time);i++){
            if(i%30===0){
                if(amount != undefined){
                    n+=amount;
                }
            }
            r=n*rate;
            n=n+r
        }
        return n
    }
    
    const opeDep = (amount: number|undefined)=>{
        let dep:number=0;
        if(amount != undefined){
            dep = amount*12*time 
        }
        return dep
    }

    const accRen = ()=>{
        const rend:number = Number(operation(amount) - opeDep(amount))
        return rend
    }


    
    useEffect(()=>{
        console.log(time)
    },[time])
    
    useEffect(()=>{
        console.log(amount)
    },[amount])
    
    
    // const verificatedType = (event: React.ChangeEvent<HTMLInputElement>) => {
        //     let typePerformance = document.getElementById('typePerformance');
        //     const newTypePerformance = event.target.value
        // }
        
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
            <label id="max">$23000</label>
            <br />
            <label htmlFor="selectYears">Tiem1po: </label>
            <select id="selectYears" onChange={timeChange} value={time}>
                <option  value={1} >1 año</option>
                <option value={2} >2 años</option>
                <option  value={5} >5 años</option>
            </select>
            <br />
            <p id="deposit">Tu deposito: ${String(opeDep(amount))}</p>
            <p id="performance">Rendimientos acumulados: ${String(accRen().toFixed(2))}</p>
            <p id="total">Al finalizar tendras: ${String(operation(amount).toFixed(2))}</p>
        </div>
    )
}



export default Range;
