import React from "react";
import "./App.css";

function Todoitem(props) {
  return (
    <div className="todoitem">
       {props.item}  
    </div>
  );
}

export default Todoitem;
