// Define a function to create a new Node instance
function createNode(data, next = null) {
    return { data, next };
  }
  
  // Define a function to represent the entire list
  function createCircularLinkedList() {
    let head = null;
    let tail = null;
    let length = 0;
  
    // Add a node to the end of the list
    function append(data) {
      const newNode = createNode(data);
  
      if (!head) {
        head = newNode;
        tail = newNode;
        tail.next = head;
      } else {
        tail.next = newNode;
        tail = newNode;
        tail.next = head;
      }
  
      length++;
    }
  
    // Add a node to the beginning of the list
    function prepend(data) {
      const newNode = createNode(data);
  
      if (!head) {
        head = newNode;
        tail = newNode;
        tail.next = head;
      } else {
        newNode.next = head;
        head = newNode;
        tail.next = head;
      }
  
      length++;
    }
  
    // Insert a node at a specific position in the list
    function insert(data, index) {
      if (index < 0 || index > length) {
        throw new Error("Index out of bounds");
      }
  
      if (index === 0) {
        return prepend(data);
      }
  
      if (index === length) {
        return append(data);
      }
  
      const newNode = createNode(data);
      let currentNode = head;
      let previousNode = null;
  
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
  
      previousNode.next = newNode;
      newNode.next = currentNode;
  
      length++;
    }
  
    // Remove a node at a specific position in the list
    function remove(index) {
      if (index < 0 || index >= length) {
        throw new Error("Index out of bounds");
      }
  
      if (index === 0) {
        head = head.next;
        tail.next = head;
      } else {
        let currentNode = head;
        let previousNode = null;
  
        for (let i = 0; i < index; i++) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
  
        previousNode.next = currentNode.next;
  
        if (index === length - 1) {
          tail = previousNode;
        }
      }
  
      length--;
    }
  
    // Get the node at a specific position in the list
    function get(index) {
      if (index < 0 || index >= length) {
        throw new Error("Index out of bounds");
      }
  
      let currentNode = head;
  
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
  
      return currentNode;
    }
  
    function log() {
      let currentHead = head
      while(currentHead) {
          console.log(currentHead.data);
          currentHead = currentHead.next
      }
    }
  
    return {
      append,
      prepend,
      insert,
      remove,
      get,
      log
    };
  }
  
  const x = createCircularLinkedList()
  x.append(2)
  x.append(3)
  x.append(4)
  x.append(9)
  x.log()