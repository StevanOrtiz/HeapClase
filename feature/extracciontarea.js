extractMin() {
  if (this.heap.length === 0) return null;

  const min = this.heap[0];
  const end = this.heap.pop();

  if (this.heap.length > 0) {
    this.heap[0] = end;
    this.heapifyDown(0);
  }

  return min;
}

heapifyDown(index) {
  let currentIndex = index;
  const length = this.heap.length;
  const current = this.heap[currentIndex];

  while (true) {
    const leftChildIndex = 2 * currentIndex + 1;
    const rightChildIndex = 2 * currentIndex + 2;
    let smallest = currentIndex;

    if (
      leftChildIndex < length &&
      this.heap[leftChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < length &&
      this.heap[rightChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = rightChildIndex;
    }

    if (smallest === currentIndex) break;

    [this.heap[currentIndex], this.heap[smallest]] = [this.heap[smallest], this.heap[currentIndex]];
    currentIndex = smallest;
  }
}
