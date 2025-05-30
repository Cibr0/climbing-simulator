import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Algoritmos</h2>
        <ul>
          <li>
            <button>FCFS</button>
          </li>
          <li>
            <button>SJF</button>
          </li>
          <li>
            <button>Prioridade</button>
          </li>
          <li>
            <button>Round Robin</button>
          </li>
          <li>
            <button>Múltiplas Filas</button>
          </li>
        </ul>
        <button className="execute-button">Executar</button>
      </aside>

      <main className="main-content">
        <h2 className="title">Simulador de Escalonamento</h2>
      </main>
    </div>
  );
}

export default Sidebar;
