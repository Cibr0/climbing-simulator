export function fcfs(processes) {
  return processes.map((proc, index) => ({
    ...proc,
    ordem: index + 1,
  }));
}
