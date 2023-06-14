import React from "react";
import "./ToDo.css";

const ToDo = ({ name, removeItem, id }) => {
  const handleRemove = (e) => {
    let itemId = e.target.id;
    console.log(itemId);
    removeItem(itemId);
  };
  return (
    <div className="ToDo" id={id} onClick={handleRemove}>
      {name}
    </div>
  );
};

export default ToDo;
