export function rr(processes, quantum) {
  let fila = [...processes];
  let resultado = [];
  let tempo = 0;

  while (fila.length) {
    const processo = fila.shift();
    const { nome, tempo: t } = processo;

    if (t > quantum) {
      resultado.push({ nome, tempo: quantum, inicio: tempo });
      fila.push({ nome, tempo: t - quantum });
      tempo += quantum;
    } else {
      resultado.push({ nome, tempo: t, inicio: tempo, finalizado: true });
      tempo += t;
    }
  }

  return resultado;
}
