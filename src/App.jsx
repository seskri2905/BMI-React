import React from "react";
import { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult(`Please enter both height and weight`);
      return;
    }

    if (height < 0 || weight < 0) {
      setResult(`Please Enter the positive value`);
      return;
    }

    const heightInMetres = height / 100;

    const bmi = (weight / (heightInMetres * heightInMetres)).toFixed(1);

    let category = ``;

    if (bmi < 18.5) category = `Underweight`;
    else if (bmi < 25) category = `Normal Weight`;
    else if (bmi < 30) category = `OverWeight`;
    else category = `Obese`;

    setResult(`Your BMI is ${bmi}: You are ${category}`);
  };

  return (
    <div>
      <div className="container">
        <h1>BMI Calculator</h1>

        <label htmlFor="height">Height (cms) </label>
        <input
          type="number"
          name=""
          id="height"
          placeholder="e.g. 170"
          value={height}
          min={0}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label htmlFor="weight">Weight (Kgs) </label>
        <input
          type="number"
          name=""
          id="weight"
          placeholder="e.g. 60"
          min={0}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate</button>

        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default App;
