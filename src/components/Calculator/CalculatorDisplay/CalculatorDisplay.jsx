export default function CalculatorDisplay({ expression, result, history }) {

  const expressionValue = (expression !== "") ? expression : 0;

  return (
    <div className="calculator__display">
      <p className="calculator__history">{history}</p>
      <p className="calculator__expression"><span>{expressionValue}</span></p>
    </div>
  )
}