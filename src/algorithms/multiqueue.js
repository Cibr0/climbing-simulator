import rr from "./rr.js";
import sjf from "./sjf.js";
import fcfs from "./fcfs.js";

export default function multiplaFila(processes, quantum) {
  const fila1 = []; // Round Robin (prioridade 1-2)
  const fila2 = []; // SJF (prioridade 3-4)
  const fila3 = []; // FCFS (prioridade 5+)

  processes.forEach(({ name, time, priority }) => {
    if (priority <= 2) fila1.push({ name, time });
    else if (priority <= 4) fila2.push({ name, time });
    else fila3.push({ name, time });
  });

  const timeline = [];
  let tempoTotal = 0;

  // Fila 1: Round Robin
  const rrTimeline = rr(fila1, quantum);
  rrTimeline.forEach((event) => {
    event.start += tempoTotal;
    timeline.push(event);
  });
  tempoTotal += rrTimeline.reduce((acc, cur) => acc + cur.time, 0);

  // Fila 2: SJF
  const sjfProcesses = sjf(fila2);
  sjfProcesses.forEach((proc) => {
    timeline.push({
      name: proc.name,
      time: proc.time,
      start: tempoTotal,
      finished: true,
    });
    tempoTotal += proc.time;
  });

  // Fila 3: FCFS
  const fcfsProcesses = fcfs(fila3);
  fcfsProcesses.forEach((proc) => {
    timeline.push({
      name: proc.name,
      time: proc.time,
      start: tempoTotal,
      finished: true,
    });
    tempoTotal += proc.time;
  });

  return timeline;
}
