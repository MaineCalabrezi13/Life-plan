import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskGrid from "./components/TaskGrid";
import ProductivityChart from "./components/ProductivityChart";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

//LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem("tarefas");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tasks));
  }, [tasks]);
//----

  const getMesAtual = () => {
    const meses = [
      "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
      "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
    ];
    const hoje = new Date();
    const nomeMes = meses[hoje.getMonth()];
    const ano = hoje.getFullYear();
    return `${nomeMes} ${ano}`;
  };

  const addTask = (task) => setTasks([...tasks, task]);

  const editTask = (updatedTask) => {
    const updated = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updated);
    setEditingTask(null);
  };

  const handleSelect = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <TaskForm
          addTask={addTask}
          editTask={editTask}
          editingTask={editingTask}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>

      <div className="main-content">
        <div className="header">
          <img src="/lifeplan.png" alt="Life Plan" className="logo-img" />
          <h2 className="subtitle">{getMesAtual()}</h2>
        </div>
        <TaskGrid tasks={tasks} onSelect={handleSelect} />
        <ProductivityChart tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
