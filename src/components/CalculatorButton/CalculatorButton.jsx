const htmlParse = (text) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  return doc.body.innerText;
}

export default function CalculatorButton({ label, clickHandler, classList = "" }) {

  const classes = ("calculator__button " + classList).trim();
  let text = label;
  if (text === "PI") text = htmlParse("&pi;");
  if (text === "/") text = htmlParse("&#247;");

  return (
    <button className={classes} onClick={() => clickHandler(label)}>{text}</button>
  )
}