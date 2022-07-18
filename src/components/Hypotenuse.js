import { useRef, useState } from "react";

export default function Hypotenuse() {
  const baseRef = useRef();
  const heightRef = useRef();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  function formSubmitHandelr(e) {
    e.preventDefault();
    const base = +baseRef.current.value;
    const height = +heightRef.current.value;
    if (base === "" || height === "") {
      setSuccess(false);
      setError("Please enter all inputs");
      return;
    }
    if (base < 1 || height < 1) {
      setError("Enter Valid Inputs");
      setSuccess(false);
      return;
    }
    const hypotenuse = Math.sqrt(base * base + height * height).toFixed(3);
    console.log(hypotenuse);
    setSuccess("Hypotenuse is " + hypotenuse);
    setError(false);
  }
  return (
    <>
      <main className="App">
        <header className="header">
          <h1 className="heading">Calculate Hypotenuse of a triangle</h1>
        </header>
        <form onSubmit={formSubmitHandelr} className="container">
          <div className="input-group">
            <label htmlFor="base">Enter base value (a) =</label>
            <input id="base" type="number" min={1} required ref={baseRef} />
          </div>
          <div className="input-group">
            <label htmlFor="height">Enter height value (b) =</label>
            <input id="height" type="number" min={1} required ref={heightRef} />
          </div>
          <div className="btn-container">
            <button type="submit" className="button">
              Check
            </button>
          </div>
        </form>
        <div className="output">
          <p className="normal-text">Hypotenuse Formula</p>
          <br />
          <p className="normal-text">√(base² + height²)</p>
          {success && !error && <p className="success">{success}</p>}
          {!success && error && <p className="error">{error}</p>}
        </div>
      </main>
    </>
  );
}
