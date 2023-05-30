function createNode(value) {
    return { value, next: null, prev: null };
  }
  
  function createDoublyLinkedList() {
    let head = null;
    let tail = null;
  
    function append(value) {
      const newNode = createNode(value);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        newNode.prev = tail;
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    function prepend(value) {
      const newNode = createNode(value);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        newNode.next = head;
        head.prev = newNode;
        head = newNode;
      }
    }
  
    function insert(value, index) {
      const newNode = createNode(value);
      if (index === 0) {
        newNode.next = head;
        if (!head) {
          tail = newNode;
        } else {
          head.prev = newNode;
        }
        head = newNode;
      } else {
        let currentNode = head;
        let i = 0;
        while (currentNode && i < index) {
          currentNode = currentNode.next;
          i++;
        }
        if (currentNode) {
          newNode.next = currentNode;
          newNode.prev = currentNode.prev;
          currentNode.prev = newNode;
          if (newNode.prev) {
            newNode.prev.next = newNode;
          }
          if (!newNode.next) {
            tail = newNode;
          }
        } else {
          append(value);
        }
      }
    }
  
    function deleteNode(index) {
      if (index === 0) {
        head = head.next;
        if (head) {
          head.prev = null;
        } else {
          tail = null;
        }
      } else {
        let currentNode = head;
        let i = 0;
        while (currentNode && i < index) {
          currentNode = currentNode.next;
          i++;
        }
        if (currentNode) {
          if (currentNode.prev) {
            currentNode.prev.next = currentNode.next;
          } else {
            head = currentNode.next;
          }
          if (currentNode.next) {
            currentNode.next.prev = currentNode.prev;
          } else {
            tail = currentNode.prev;
          }
        }
      }
    }
  
    function indexOf(value) {
      let currentNode = head;
      let i = 0;
      while (currentNode) {
        if (currentNode.value === value) {
          return i;
        }
        currentNode = currentNode.next;
        i++;
      }
      return -1;
    }
  
    function Node(value, next, prev) {
      this.value = value;
      this.next = next || null;
      this.prev = prev || null;
    
      this.toJSON = function() {
        return {
          value: this.value,
          next: this.next ? this.next.toJSON() : null
        };
      };
    }
    
  
    function log() {
      let currentNode = head;
      // let values = [];
      // while (currentNode) {
      //   values.push(currentNode.value);
      //   currentNode = currentNode.next;
      // }
      // console.log("Values:", values);
      // console.log("Head:", head);
      // console.log("Tail:", tail);
  
      currentNode = head;
      while(currentNode) {
          console.log(head);
          currentNode = currentNode.next;
      }
      console.log(tail);
    }
  
    return { append, prepend, insert, deleteNode, indexOf, log };
  }
  
  
  
  const list = createDoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.insert(4, 4);
  list.deleteNode(2);
  list.log(); // Outputs: Values: [0, 1, 3, 4, 2], Tail: {value: 2, next: null, prev: {value: 4, ...}}