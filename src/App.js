import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  function togglePepperoni(e) {
    setPepperoniIsChecked(e.target.checked);
  }

  return (
    <div className="pizza-container">
      <h1>Select Pizza Toppings</h1>
      
      <div className="topping-option">
        <input
          type="checkbox"
          id="pepperoni"
          checked={pepperoniIsChecked}
          aria-checked={pepperoniIsChecked}
          onChange={togglePepperoni}
        />
        <label htmlFor="pepperoni">Add pepperoni</label>
      </div>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked ? <li className="pepperoni">Pepperoni</li> : null}
      </ul>
    </div>
  );
}

export default App;
