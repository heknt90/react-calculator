const htmlParse = (text) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  return doc.body.innerText;
}

export default function CalculatorButton({ label, clickHandler }) {

  let text = label;
  if (text === "PI") text = htmlParse("&pi;");

  return (
    <button className="calculator__button" onClick={() => clickHandler(label)}>{text}</button>
  )
}