import Range from "./components/range";

export default function App() {
    return (
        <main>
            <h1>App</h1>
            <label id="amount">Monto {}</label><br />
            <label id="min">$500</label>
            <output id="outVal" className="outVal"></output>
            <input id="range" type="range" min="500" max="23000" step="500" value="500" />
            {/* onChange={document.getElementById('outVal').value = value} */}
            <label id="max">$23000</label>
            <br />
            <p id="deposit">Tu deposito: ${}</p>
            <p id="performance">Rendimientos acumulados: ${}</p>
            <p id="total">Al finalizar tendras: ${}</p>
            {/* <Range /> */}
        </main>
    );
}