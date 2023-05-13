import './todolist.css';

import React,{useState} from "react";

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value)
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter a title for this task…"
        onChange={e => setValue(e.target.value)}
      />
      
    </form>
  );
}

export default function Todolist(){



  const [tasks, setTasks] = useState([]);

  const addTask = text => setTasks([...tasks, { text }]);


  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <div className="todo">
           
          {task.text}
          
          <button onClick={() => removeTask(index)}>X</button>
        </div>
      ))}
      <AddTaskForm addTask={addTask} />
    </div>
  );
}