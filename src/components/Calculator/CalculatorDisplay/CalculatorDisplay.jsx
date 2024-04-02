export default function CalculatorDisplay({ expression, result, history }) {

  const expressionValue = (expression !== "") ? expression : 0;
  const resultValue = (result) ? `=${result}` : "";

  return (
    <div className="calculator__display">
      <p>{history}</p>
      <p className="calculator__expression"><span>{expressionValue}</span><span>{resultValue}</span></p>
    </div>
  )
}