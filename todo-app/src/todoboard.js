import React from "react";
import Todoitem from "./todoitem";
import "./App.css";
function Todoboard(props) {
  return (
    <div className="todoboard">
      <h1>할 일 목록</h1>

      {props.todolist.map((item) => (
        <Todoitem item={item} />
      ))}
    </div>
  );
}

export default Todoboard;
