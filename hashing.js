// function hash(key, size) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % size;
//   }
  
//   const size = 10;
//   const hashTable = new Array(size);
  
//   function setValue(key, value) {
//     const hashedKey = hash(key, size);
//     hashTable[hashedKey] = value;
//   }
  
//   setValue("example", 42);
  
//   console.log(hashTable);

function hash(key, size) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
        console.log(total,"ppp",key,"lll",total % size,"oooo",total ,"iii", size );
    }
    return total % size;
  }
  
  const size = 10;
  const hashTable = new Array(size);
  
  function setValue(key, value) {
    const hashedKey = hash(key, size);
    if (!hashTable[hashedKey]) {
      hashTable[hashedKey] = [];
    }
    const index = hashTable[hashedKey].findIndex(item => item.key === key);
    if (index !== -1) {
      hashTable[hashedKey][index].value = value;
    } else {
      hashTable[hashedKey].push({ key, value });
    }
  }
  
  function getValue(key) {
    const hashedKey = hash(key, size);
    if (hashTable[hashedKey]) {
      const item = hashTable[hashedKey].find(item => item.key === key);
      if (item) {
        return item.value;
      }
    }
    return undefined;
  }
  function display() {
    for (let i = 0; i < hashTable.length; i++) {
      if (hashTable[i]) {
        console.log(i, hashTable[i]);
      }
    }
  }
  
  
  setValue("example", 42);
  setValue("hello", "world");
  setValue("exampler", 41);
  display();

  
//   console.log(hashTable);
//   console.log(getValue("example")); // Output: 42
//   console.log(getValue("hello")); // Output: world
//   console.log(getValue("invalid")); // Output: undefined
  
  