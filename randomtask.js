function insertRandomTasksToHeap(heap, n, maxPriority = 10) {
  console.log(`Insertando ${n} tareas aleatorias en el heap:\n`);

  for (let i = 0; i < n; i++) {
    const priority = Math.floor(Math.random() * maxPriority) + 1; // entre 1 y maxPriority
    const task = {
      name: `Tarea${i + 1}`,
      priority: priority
    };
    console.log(`Insertando: ${task.name} con prioridad ${task.priority}`);
    heap.insert(task);
  }

  console.log("\n ---- Representación bonita del heap: ----");
  heap.printHeapPretty();

  console.log("\n ---- Heap como arreglo: ----");
  heap.printHeap();

  console.log("\n ---- Extraer tarea más prioritaria: ----");
  console.log("Tarea más prioritaria:", heap.extractMin());

  console.log("\n ---- Heap después de extraer tarea: ----");
  heap.printHeap();
}
