import React, { useState } from "react";
import "./ToDoList.css";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import { v4 as uuid } from "uuid";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  const addItem = (toDo) => {
    let newToDo = { ...toDo, id: uuid() };
    setToDos((toDos) => [...toDos, newToDo]);
  };

  /** Remove the selected item from state. */
  const removeItem = (itemId) => {
    let noItem = toDos.filter((el) => el.id !== itemId);
    setToDos(() => [...noItem]);
  };

  return (
    <div className="ToDoList">
      <h2 className="ToDoList-header">My To Do List</h2>
      <div className="ToDoList-form">
        <ToDoForm addItem={addItem} />
      </div>
      <div className="ToDoList-list-container">
        {toDos.map((n) => (
          <ToDo name={n.name} key={n.id} id={n.id} removeItem={removeItem} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
