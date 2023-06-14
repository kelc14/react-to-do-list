import React, { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = ({ addItem }) => {
  const INITIAL_STATE = { name: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name} to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addItem(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** Render:
   *
   */
  return (
    <div className="ToDoForm" onSubmit={handleSubmit}>
      <form className="ToDoForm-form">
        <label htmlFor="name">Task:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          className="ToDoForm-input"
        />

        <button className="ToDoForm-btn">Add to List</button>
      </form>
    </div>
  );
};

export default ToDoForm;
