import React from "react";
import "./App.css";

function DeleteBtn({ tasks, setTasks, index }) {
  const deleteTask = () => {
    setTasks(tasks.filter((_, i) => i !== index));
};

  return <button onClick={deleteTask} className="deletebtn">삭제</button>;
}

function EditBtn({ tasks, setTasks, index }) {
  const editTask = () => {
    const newTask = prompt("수정할 내용을 입력하세요", tasks[index]); 
if (newTask !== null && newTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTask; 
      setTasks(updatedTasks);
    }
  };

  return <button onClick={editTask} className="editbtn">수정</button>;
}

export { DeleteBtn, EditBtn };
