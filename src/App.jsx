import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  // Function to add a new input field
  const handleAddFields = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  // Function to remove an input field by index
  const handleRemoveFields = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  // Function to update the value of an input field
  const handleValueChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  return (
    <div className="container">
      <h2>Dynamic Input Fields</h2>

      {inputFields.map((inputField, index) => (
        <div className="input-container" key={index}>
          <input
            type="text"
            placeholder="Enter a value"
            value={inputField.value}
            onChange={(e) => handleValueChange(index, e)}
          />

          <button className="delete-btn" onClick={() => handleRemoveFields(index)}>
            <span class="material-symbols-outlined delete-icon">delete</span>
          </button>
        </div>
      ))}

      <button className="add-btn" onClick={handleAddFields}>
        <span class="material-symbols-outlined add-icon">add</span>Add Field
      </button>
    </div>
  );
};

export default App;
