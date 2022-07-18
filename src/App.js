import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const angle1Ref = useRef();
  const angle2Ref = useRef();
  const angle3Ref = useRef();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  function formSubmitHandelr(e) {
    e.preventDefault();
    const angle1 = +angle1Ref.current.value;
    const angle2 = +angle2Ref.current.value;
    const angle3 = +angle3Ref.current.value;

    if (angle1 === "" || angle2 === "" || angle3 === "") {
      setError("Enter Input");
    }
    if (angle1 < 1 || angle2 < 1 || angle3 < 1) {
      setError("Input Must Be Greater Than 0");
      return;
    }
    if (angle1 + angle2 + angle3 === 180) {
      setSuccess(true);
      setError(false);
    } else {
      setSuccess(false);
      setError("Nope, it is not a triangle");
    }
  }
  return (
    <>
      <main className="App">
        <header className="header">
          <h1 className="heading">Is Triangle?</h1>
        </header>
        <form onSubmit={formSubmitHandelr} className="container">
          <div className="input-group">
            <label htmlFor="angle-1">Angle 1</label>
            <input
              id="angle-1"
              type="number"
              min={1}
              required
              ref={angle1Ref}
            />
          </div>
          <div className="input-group">
            <label htmlFor="angle-2">Angle 2</label>
            <input
              id="angle-2"
              type="number"
              min={1}
              required
              ref={angle2Ref}
            />
          </div>
          <div className="input-group">
            <label htmlFor="angle-3">Angle 3</label>
            <input
              id="angle-3"
              type="number"
              min={1}
              required
              ref={angle3Ref}
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="button">
              Check
            </button>
          </div>
        </form>
        <div className="output">
          {success && !error && (
            <p className="success">Yay, the angles forms a triangle!</p>
          )}
          {!success && error && <p className="error">{error}</p>}
        </div>
      </main>
    </>
  );
}
