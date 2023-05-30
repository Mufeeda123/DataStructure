function createNode(values, next = null) {
  return { values, next };
}

function createLinkedList() {
  let head = null;
  let tail = null;

//   ADD ELEMENTS TO LINKED LIST
  function insert(values) {
    const node = createNode(values);
    if (!head) {
      head = node;
      tail = node;
      return node;
    }
    tail.next = node;
    tail = node;
    return node;
  }

//   CONVERT LINKED LIST TO ARRAY
  function convertToArray() {
    let currentHead = head;
    const arr = [];
    while (currentHead) {
      arr.push(currentHead.values);
      currentHead = currentHead.next;
    }
    console.log(arr);
  }

//   ADD ELEMENT AT SPECIFIC POSITION
  function insertAtPosition(values, index) {
    const node = createNode(values);
    if (index === 0) {
      node.next = head;
      head = node;
      if (!tail) {
        tail = node;
      }
    } else {
      let currentNode = head;
      let prevNode = null;
      let i = 0;
      while (currentNode && i < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      node.next = currentNode;
      prevNode.next = node;
      if (!node.next) {
        tail = node;
      }
    }
  }

//   REMOVE ELEMENT AT SPECIFIC POSTITION
  function deleteAtPosition(index) {
    if (index === 0) {
      head = head.next;
      if (!head) {
        tail = null;
      }
    } else {
      let currentNode = head;
      let prevNode = null;
      let i = 0;
      while (currentNode) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      if (currentNode) {
        prevNode.next = currentNode.next;
        if (!prevNode.next) {
          tail = prevNode;
        }
      }
    }
  }

//   CHECK IF AN ELEMENT IS IN LINKED LIST
  function checkNode(values) {
    let currentNode = head;
    let i = 0;
    while (currentNode) {
      if (currentNode.values === values) {
        return i;
      }
      currentNode = currentNode.next;
      i++;
    }
    return "element not in linked list";
  }

  function log() {
    console.log(JSON.stringify(head));
  }

  return {
    insert,
    log,
    head,
    tail,
    convertToArray,
    insertAtPosition,
    deleteAtPosition,
    checkNode,
  };
}

const x = createLinkedList();
x.insert(5);
x.insert(10);
// x.log();
// x.convertToArray()

const array = [4, 7, 3, 10, 2];

for (let i = 0; i < array.length; i++) {
  x.insert(array[i]);
}

x.insertAtPosition(8, 0);
x.insertAtPosition(8, 1);
x.deleteAtPosition(0);
x.log();
console.log(x.checkNode(3));
// x.convertToArray();