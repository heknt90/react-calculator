import { useEffect, useState } from "react"
import CalculatorButton from "../CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay/CalculatorDisplay";

const initialOperation = {
  operand1: 0,
  operand2: 0,
  operator: null,
  result: null,
};

const operatorList = {
  "x": multiplication,
  "/": division,
  "+": sum,
  "-": difference,
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

export default function Calculator() {
  const [operation, setOperation] = useState(initialOperation);

  function concat(prev, digit) {
    return parseFloat("" + prev + digit)
  }

  function setOperand(value, operandName) {
    setOperation(oldOperation => {
      const newOperation = Object.assign({}, oldOperation);
      newOperation[operandName] = concat(newOperation[operandName], value);
      return newOperation;
    });
  }

  function clearButtonHandler() {
    setOperation(prev => initialOperation);
  }

  function resultButtonHandler() {
    const func = operatorList[operation.operator];
    setOperation(prev => {
      const result = func(prev.operand1, prev.operand2);
      return ({ ...prev, result });
    });
  }

  function addOperandDigitButtonHandler(digit) {
    if (!operation.result) {
      let operandName = "operand1";
      if (!!operation.operator) {
        operandName = "operand2";
      }
      setOperand(digit, operandName);
    }
  }

  function setOperatorButtonHandler(operator) {
    if (!operation.result) {
      setOperation(prev => {
        const newOperation = Object.assign({}, prev);
        newOperation.operator = operator;
        return newOperation;
      });
    }
  }

  return (
    <div>
      <div className="calculator">
        <CalculatorDisplay operation={operation} />

        <div className="calculator__controls">
          <CalculatorButton label="(" />
          <CalculatorButton label=")" />
          <CalculatorButton label="C" clickHandler={clearButtonHandler} />
          <CalculatorButton label="/" clickHandler={setOperatorButtonHandler} />

          <CalculatorButton label="7" clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="8" clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="9" clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="x" clickHandler={setOperatorButtonHandler} />

          <CalculatorButton label="4" clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="5" clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="6" clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="-" clickHandler={setOperatorButtonHandler} />

          <CalculatorButton label="1" clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="2" clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="3" clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="+" clickHandler={setOperatorButtonHandler} />

          <CalculatorButton label="+/-" />
          <CalculatorButton label="0" clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="," clickHandler={addOperandDigitButtonHandler} />
          <CalculatorButton label="=" clickHandler={resultButtonHandler} />
        </div>
      </div>
    </div>
  )
}