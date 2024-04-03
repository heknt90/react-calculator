import { useEffect, useState } from "react"
import CalculatorButton from "../CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay/CalculatorDisplay";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState("");

  useEffect(() => { }, [])

  function addCharToExpressionHandler(char) {
    if (char === "x") char = "*";
    if (char === ",") char = ".";
    if (char === "PI") char = Math.PI;
    setExpression(prev => prev + char);
  }

  function deleteLastCharHandler() {
    if (expression !== "") {
      setExpression(prev => prev.slice(0, -1));
    }
  }

  function clearButtonHandler() {
    setExpression(prev => "");
  }

  function resultButtonHandler() {
    try {
      if (expression !== "" && eval(expression)) {
        const res = eval(expression)
        setHistory(prev => expression + "=" + res)
        setExpression(prev => res);
      }
    } catch (e) { }
  }

  return (
    <div>
      <div className="calculator">
        <CalculatorDisplay expression={expression} history={history} />

        <div className="calculator__controls">
          <div style={{ gridColumn: "2" }}></div>
          <CalculatorButton label="C" clickHandler={clearButtonHandler} classList="calculator__button_del" />
          <CalculatorButton label="Del" clickHandler={deleteLastCharHandler} classList="calculator__button_clear" />

          <CalculatorButton label="(" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label=")" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="PI" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="/" clickHandler={addCharToExpressionHandler} />

          <CalculatorButton label="7" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="8" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="9" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="x" clickHandler={addCharToExpressionHandler} />

          <CalculatorButton label="4" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="5" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="6" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="-" clickHandler={addCharToExpressionHandler} />

          <CalculatorButton label="1" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="2" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="3" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="+" clickHandler={addCharToExpressionHandler} />

          {/* <CalculatorButton label="+/-" clickHandler={changeSignHandler} /> */}
          <div></div>
          <CalculatorButton label="0" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="," clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="=" clickHandler={resultButtonHandler} classList="calculator__button_match" />
        </div>
      </div>
    </div>
  )
}