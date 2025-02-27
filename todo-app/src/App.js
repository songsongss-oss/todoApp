import React, { useState } from "react";
import Todoboard from "./todoboard";
import Todoitem from "./todoitem";
import { DeleteBtn, EditBtn } from "./delete,editbtn";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggedItem === null) return;
    const newTasks = [...tasks];
    const movedItem = newTasks.splice(draggedItem, 1)[0];
    newTasks.splice(index, 0, movedItem);
    setTasks(newTasks);
    setDraggedItem(null);
  };

  return (
    <div>
      <h1 className="title">🐱 투두리스트 🐱</h1>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={handleChange}
            placeholder="할 일을 입력하세요"
          />
          <button type="submit">추가</button>
        </form>

        <div className="task-list">
          {tasks.map((item, index) => (
            <div
              key={index}
              className="task-item"
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
            >
              <Todoitem item={item} />
              <div className="button-container">
                <EditBtn tasks={tasks} setTasks={setTasks} index={index} />
                <DeleteBtn tasks={tasks} setTasks={setTasks} index={index} />
              </div>
            </div>
          ))}
        </div>

        <Todoboard todolist={tasks} />
      </div>
    </div>
  );
}

export default App;
