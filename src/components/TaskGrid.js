import React from "react";
import "./TaskGrid.css";

const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const corMap = {
  Azul: "#0000FF",
  Verde: "#008000",
  Vermelho: "#FF0000",
  Amarelo: "#FFD700",
  Roxo: "#800080",
};

const TaskGrid = ({ tasks, onSelect }) => {
  const grouped = dias.map((dia) => tasks.filter((t) => t.dia === dia));

  return (
    <div className="task-grid">
      <table>
        <thead>
          <tr>
            {dias.map((dia) => (
              <th key={dia} style={{ width: `${100 / dias.length}%` }}>
                {dia}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {grouped.map((tarefas, index) => (
              <td key={index} style={{ width: `${100 / dias.length}%` }}>
                {tarefas.map((t) => (
                  <div
                    key={t.id}
                    className="task-box"
                    style={{ backgroundColor: corMap[t.cor] }}
                    onClick={() => onSelect(t)}
                  >
                    <span>{t.horario} - {t.texto}</span>
                  </div>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskGrid;
