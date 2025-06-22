import React, { useState, useEffect } from "react";

const cores = ["Azul", "Verde", "Vermelho", "Amarelo", "Roxo"];

const TaskForm = ({ addTask, editTask, editingTask, tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: null,
    dia: "Dom",
    horario: "",
    cor: "Azul",
    texto: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingTask) setTask(editingTask);
  }, [editingTask]);

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!task.texto.trim()) return setError("⚠️ Descrição da tarefa obrigatória");
    if (!task.horario) return setError("⚠️ Horário obrigatório");

    setError("");
    if (task.id) editTask(task);
    else addTask({ ...task, id: Date.now() });

    setTask({ id: null, dia: "Dom", horario: "", cor: "Azul", texto: "" });
  };

  const handleEdit = () => {
    if (task.id) editTask(task);
  };

  const handleDelete = () => {
    if (task.id) {
      setTasks(tasks.filter((t) => t.id !== task.id));
      setTask({ id: null, dia: "Dom", horario: "", cor: "Azul", texto: "" });
    }
  };

  return (
    <div>
      <h2>Gerenciador de Tarefas</h2>
      {error && <p className="error-message">{error}</p>}
      <label>Dia da Semana:</label>
      <select name="dia" value={task.dia} onChange={handleChange}>
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>
      <label>Horário:</label>
      <input
        type="time"
        name="horario"
        value={task.horario}
        onChange={handleChange}
      />
      <label>Cor:</label>
      <select name="cor" value={task.cor} onChange={handleChange}>
        {cores.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <label>Tarefa:</label>
      <input
        type="text"
        name="texto"
        value={task.texto}
        onChange={handleChange}
        placeholder="Digite a Tarefa"
      />
      <button className="btn-add" onClick={handleSubmit}> Adicionar Tarefa</button>
      <button className="btn-edit" onClick={handleEdit}>Editar Tarefa</button>
      <button className="btn-delete" onClick={handleDelete}>Excluir Tarefa</button>
    </div>
  );
};

export default TaskForm;

