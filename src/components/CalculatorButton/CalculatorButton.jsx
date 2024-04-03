const htmlParse = (text) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  return doc.body.innerText;
}

export default function CalculatorButton({ label, clickHandler, classList = "", setExpression = null, setHistory = null }) {

  const classes = ("calculator__button " + classList).trim();
  let text = label;
  if (text === "PI") text = htmlParse("&pi;");
  if (text === "/") text = htmlParse("&#247;");

  let handler;
  if (setExpression && setHistory) {
    handler = () => clickHandler(setExpression, setHistory);
  } else {
    handler = () => clickHandler(label);
  }

  return (
    <button className={classes} onClick={handler}>{text}</button>
  )
}