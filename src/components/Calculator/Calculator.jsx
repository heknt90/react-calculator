import { useEffect, useState } from "react"
import CalculatorButton from "../CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay/CalculatorDisplay";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState("");
  const [isKeyPressConnected, setIsKeyPressConnected] = useState(false);

  useEffect(() => {
    if (!isKeyPressConnected) {
      const keyPressListener = document.addEventListener("keydown", (event) => {
        let key = event.key;
        if (key === ",") key = ".";
        if (key === "Delete") clearHandler();
        else if (key === "Enter") resultHandler(setExpression, setHistory);
        else if (key === "Backspace") deleteLastCharHandler();
        else if ([".", "+", "-", "*", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")"].indexOf(key) !== -1) addCharToExpressionHandler(key);
      });
      setIsKeyPressConnected(true);
      return document.removeEventListener("keydown", keyPressListener);
    }
  }, [expression, isKeyPressConnected])

  function addCharToExpressionHandler(char) {
    if (char === "x") char = "*";
    if (char === ",") char = ".";
    if (char === "PI") char = Math.PI;
    setExpression(prevExpression => prevExpression + char);
  }

  function deleteLastCharHandler() {
    setExpression(prevExpression => {
      if (prevExpression !== "") {
        return prevExpression.slice(0, -1);
      }
    });
  }

  function clearHandler() {
    setExpression(prevExpression => "");
  }

  function resultHandler(setExpression, setHistory) {
    setExpression(prevExpression => {
      try {
        if (prevExpression !== "" && eval(prevExpression)) {
          const res = eval(prevExpression);
          setHistory(prevHistory => prevExpression + "=" + res);
          return "" + res;
        }
      } catch (error) {
        return prevExpression;
      };
    });
  }

  return (
    <div>
      <div className="calculator">
        <CalculatorDisplay expression={expression} history={history} />

        <div className="calculator__controls">
          <div style={{ gridColumn: "2" }}></div>
          <CalculatorButton label="C" clickHandler={clearHandler} classList="calculator__button_del" />
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

          <div></div>
          <CalculatorButton label="0" clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="," clickHandler={addCharToExpressionHandler} />
          <CalculatorButton label="=" clickHandler={resultHandler} setExpression={setExpression} setHistory={setHistory} classList="calculator__button_match" />
        </div>
      </div>
    </div>
  )
}