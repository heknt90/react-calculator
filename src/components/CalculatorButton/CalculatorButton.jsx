export default function CalculatorButton({ label, clickHandler }) {

  return (
    <button className="calculator__button" onClick={() => clickHandler(label)}>{label}</button>
  )
}