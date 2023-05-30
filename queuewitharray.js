
function createQueue() {
  const queue = [];

  function enqueue(item) {
    queue.push(item);
  }

  function dequeue() {
    if (isEmpty()) {
      return undefined;
    }
    return queue.shift();
  }

  function peek() {
    if (isEmpty()) {
      return undefined;
    }
    return queue[0];
  }

  function isEmpty() {
    return queue.length === 0;
  }

  function size() {
    return queue.length;
  }

  return {
    enqueue,
    dequeue,
    peek,
    isEmpty,
    size
  };
}

// Usage example:
const queue = createQueue();
queue.enqueue('Apple');
queue.enqueue('Banana');
queue.enqueue('Cherry');
console.log(queue.size()); // Output: 3
console.log(queue.peek()); // Output: 'Apple'
console.log(queue.dequeue()); // Output: 'Apple'
console.log(queue.isEmpty()); // Output: false
