export function prioridade(processes) {
  return [...processes].sort((a, b) => a.prioridade - b.prioridade);
}
