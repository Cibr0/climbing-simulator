import React, { useState } from "react";
import "./sidebar.css";

function Sidebar() {
  const [showOptions, setShowOptions] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [processData, setProcessData] = useState({
    name: "",
    time: "",
    priority: "",
    quantum: "",
  });

  const toggleOptions = () => setShowOptions(!showOptions);
  const toggleForm = () => setShowForm(!showForm);

  const handleAlgorithmSelect = (algo) => {
    setSelectedAlgorithm(algo);
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    setProcessData({ ...processData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <button onClick={toggleOptions} className="toggle-button">
          Escolha o tipo de Escalonamento
        </button>

        {showOptions && (
          <ul>
            {[
              "FCFS",
              "SJF",
              "Prioridade",
              "Round Robin",
              "Múltiplas Filas",
            ].map((algo) => (
              <li key={algo}>
                <button onClick={() => handleAlgorithmSelect(algo)}>
                  {algo}
                </button>
              </li>
            ))}
          </ul>
        )}

        <button onClick={toggleForm} className="toggle-button">
          Criar Processos
        </button>

        {showForm && (
          <form className="process-form">
            <input
              type="text"
              name="name"
              placeholder="Nome do processo"
              onChange={handleInputChange}
            />

            <input
              type="number"
              name="time"
              placeholder="Tempo de serviço"
              onChange={handleInputChange}
            />

            <input
              type="number"
              name="priority"
              placeholder="Prioridade"
              onChange={handleInputChange}
            />

            {(selectedAlgorithm === "Round Robin" ||
              selectedAlgorithm === "Múltiplas Filas") && (
              <input
                type="number"
                name="quantum"
                placeholder="Quantum"
                onChange={handleInputChange}
              />
            )}
            <button className="execute-button">Criar Processo</button>
          </form>
        )}

        <button className="execute-button">Executar</button>
      </aside>

      <main className="main-content">
        <h2 className="title">Simulador de Escalonamento</h2>
      </main>
    </div>
  );
}

export default Sidebar;
