import { useState } from "react"
import CalculatorButton from "../CalculatorButton";

export default function Calculator() {

  const [display, setDisplay] = useState(0);
  const [action, setAction] = useState({
    operand1: 0,
    operand2: null,
    operation: null,
  })

  function clear() {
    setAction({
      operand1: 0,
      operand2: null,
      operation: null,
    })
  }

  function sum(operand1, operand2) {
    return operand1 + operand2;
  }

  function difference(operand1, operand2) {
    return operand1 - operand2;
  }

  function multiplication(operand1, operand2) {
    return operand1 * operand2;
  }

  function division(operand1, operand2) {
    return operand1 / operand2;
  }

  function setOperand1(operand1) {
    setAction({ ...action, operand1 })
  }

  function setOperand2(operand2) {
    setAction({ ...action, operand2 })
  }

  function setOperator(operator) {
    setAction({ ...action, operator })
  }

  function clearButtonHandler() {

  }

  function resultButtonHandler() {

  }

  function addOperandButtonHandler() {

  }

  function addOperationButtonHandler() {

  }

  return (
    <div>
      <div className="calculator">
        <div className="calculator__display">{display}</div>
        <div className="calculator__controls">

          <CalculatorButton label="(" />
          <CalculatorButton label=")" />
          <CalculatorButton label="C" />
          <CalculatorButton label="/" />


          <CalculatorButton label="7" />
          <CalculatorButton label="8" />
          <CalculatorButton label="9" />
          <CalculatorButton label="x" />

          <CalculatorButton label="4" />
          <CalculatorButton label="5" />
          <CalculatorButton label="6" />
          <CalculatorButton label="-" />

          <CalculatorButton label="1" />
          <CalculatorButton label="2" />
          <CalculatorButton label="3" />
          <CalculatorButton label="+" />

          <CalculatorButton label="+/-" />
          <CalculatorButton label="0" />
          <CalculatorButton label="," />
          <CalculatorButton label="=" />
        </div>
      </div>
    </div>
  )
}