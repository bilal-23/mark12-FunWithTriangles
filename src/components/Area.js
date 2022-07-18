import { useRef, useState } from "react";
import styles from "./Area.module.css";

export default function Area() {
  const firstSideRef = useRef();
  const secondSideRef = useRef();
  const thirdSideRef = useRef();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  function formSubmitHandelr(e) {
    e.preventDefault();
    const first = +firstSideRef.current.value;
    const second = +secondSideRef.current.value;
    const third = +thirdSideRef.current.value;
    if (first === "" || second === "" || third === "") {
      setSuccess(false);
      setError("Please enter all inputs");
      return;
    }
    if (first < 1 || second < 1 || third < 1) {
      setError("Enter Valid Inputs");
      setSuccess(false);
      return;
    }
    if (
      first + second > third &&
      second + third > first &&
      first + third > second
    ) {
      const semiPerimeter = (first + second + third) / 2;

      const result = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - first) *
          (semiPerimeter - second) *
          (semiPerimeter - third)
      ).toFixed(4);
      setSuccess("Area of this triangle is " + result);
      setError(false);
    } else {
      setError("Given inputs does not form a triangle");
      setSuccess(false);
    }
  }
  return (
    <>
      <main className="App">
        <header className="header">
          <h1 className="heading">Calculate Area of a triangle</h1>
        </header>
        <form onSubmit={formSubmitHandelr} className="container">
          <div className={`input-group ${styles.group}`}>
            <label htmlFor="first-side">Enter first side of a triangle</label>
            <input
              id="first-side"
              type="number"
              min={1}
              required
              ref={firstSideRef}
            />
          </div>
          <div className={`input-group ${styles.group}`}>
            <label htmlFor="second-side">Enter second side of a triangle</label>
            <input
              id="second-side"
              type="number"
              min={1}
              required
              ref={secondSideRef}
            />
          </div>
          <div className={`input-group ${styles.group}`}>
            <label htmlFor="third-side">Enter third side of a triangle</label>
            <input
              id="third-side"
              type="number"
              min={1}
              required
              ref={thirdSideRef}
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="button">
              Check
            </button>
          </div>
        </form>
        <div className="output">
          {success && !error && <p className="success">{success}</p>}
          {!success && error && <p className="error">{error}</p>}
        </div>
      </main>
    </>
  );
}
