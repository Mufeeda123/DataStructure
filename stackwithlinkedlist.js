function createNode(value) {
    return { value, next: null };
  }
  
  function createStack() {
    let top = null;
  
    function push(value) {
      const newNode = createNode(value);
      newNode.next = top;
      top = newNode;
      /*
      top = {
        value:10,
        next:null
      }
      */
       /*
      top = {
        value:10,
        next:null
      }
      neNode = {
        value:20,
        next: {
        value:10,
        next:null
      }
      }
      */
        /*
      top = {
        value:20,
        next: {
        value:10,
        next:null
      }

      }
      newNode={
        value:30;
        next: {
        value:20,
        next: {
        value:10,
        next:null
      }
        
      }
      */
    }
  
    function pop() {
      if (isEmpty()) {
        return undefined;
      }
  /*
  top:{
    value:10
    next: null
  }
  */
      const poppedValue = top.value;  //to get top value
      top = top.next; //actual removing
       /*
      top={
        value:30;
        next: {
        value:20,
        next: {
        value:10,
        next:null
      }    }  }

      poppedvalue=30
      */
      return poppedValue;
    }
  
    function peek() {
      if (isEmpty()) {
        return undefined;
      }
  
      return top.value;
    }
  
    function isEmpty() {
      return top === null;
    }
  
    return {
      push,
      pop,
      peek,
      isEmpty,
    };
  }
  
  // Usage:
  const stack = createStack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.pop()); // Output: 30
  console.log(stack.peek()); // Output: 20
  console.log(stack.isEmpty()); // Output: false
  
  