export function sjf(processes) {
  return [...processes].sort((a, b) => a.tempo - b.tempo);
}
