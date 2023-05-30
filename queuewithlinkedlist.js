function createQueue() {
    let head = null;
    let tail = null;
    let count = 0;
  
    function Node(value) {
      return {
        value,
        next: null
      };
    }
  
    function enqueue(item) {
      const newNode = Node(item);
  
      if (isEmpty()) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;//next
        tail = newNode;//value,next
      }
  
      count++;
    }
  
    function dequeue() {
      if (isEmpty()) {
        return undefined;
      }
  
      const value = head.value;
      head = head.next;
      count--;
  
      if (isEmpty()) {
        tail = null;
      }
  
      return value;
    }
  
    function peek() {
      if (isEmpty()) {
        return undefined;
      }
      return head.value;
    }
  
    function isEmpty() {
      return count === 0;
    }
  
    function size() {
      return count;
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
  