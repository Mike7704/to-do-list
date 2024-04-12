"use client";
import { useState, ChangeEvent } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState<string[]>(["Task 1", "Task 2", "Task 3"]);
  const [newTask, setNewTask] = useState<string>("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask !== "") {
      // Add new task to current list of tasks
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    // Remove task with given index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      // Swap elements in the array
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      // Swap elements in the array
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event)}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol className="tasks-container">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ⬇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
