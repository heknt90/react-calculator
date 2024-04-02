export default function CalculatorDisplay({ operation }) {

  return (
    <div className="calculator__display">
      <span className="calculator__display-operand1">{(operation.operand1) ? operation.operand1 : "0"}</span>
      <span className="calculator__display-operation">{(operation.operator) ? operation.operator : ""}</span>
      <span className="calculator__display-operand2">{(operation.operand2) ? operation.operand2 : ""}</span>
      <span className="calculator__display-result">{(operation.result) ? "=" + operation.result : ""}</span>
    </div>
  )
}