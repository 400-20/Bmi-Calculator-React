import './App.css';
function App() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height <= 0 || isNaN(height)) {
      result.innerHTML = 'Please enter a valid height';
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
      result.innerHTML = 'Please enter a valid weight';
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      let message = `<span>Your BMI is ${bmi}. `;

      if (bmi < 18.5) {
        message += 'You are underweight.</span>';
      } else if (bmi >= 18.5 && bmi < 25) {
        message += 'You have a normal weight.</span>';
      } else if (bmi >= 25 && bmi < 30) {
        message += 'You are overweight.</span>';
      } else {
        message += 'You are obese.</span>';
      }

      result.innerHTML = message;
    }
  });

  return (
    <>
      <div className="container">
        <form>
          <p>
            Height: <input type="number" id="height"></input>
          </p>
          <p>
            Weight: <input type="number" id="weight"></input>
          </p>
          <button type="submit"> Calculate </button>
          <div id="result"> </div>
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater Than 24.9</p>
        </form>
      </div>
    </>
  );
}

export default App;
