export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // Block-scoped, won't overwrite the outer task
    const task2 = false; // Block-scoped, won't overwrite the outer task2
  }

  return [task, task2]; // Returns the outer task and task2
}
