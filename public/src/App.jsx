import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
    // setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number === "") {
      // setResult("please input data");
      alert("Please input number");
    } else {
      const reverseNumber = parseInt(number.split("").reverse().join(""), 10);
      const hasil = Math.abs(number - reverseNumber);
      setResult(hasil);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Input Number</span>
          </label>
          <input
            type="text"
            placeholder="input number"
            className="input input-bordered"
            value={number}
            onChange={handleChange}
            required
          />
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="text-5xl font-bold mt-4">
            Result: {result !== null ? result : 0}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
