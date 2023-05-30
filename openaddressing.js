function createHashTable(size) {
    const table = new Array(size);
  
    function hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % size;
    }
  
    function set(key, value) {
      const index = hash(key);
      let i = index;
      while (table[i] !== undefined) {
        i = (i + 1) % size;
      }
      table[i] = [key, value];
    }
  
    function get(key) {
      const index = hash(key);
      let i = index;
      while (table[i] !== undefined) {
        if (table[i][0] === key) {
          return table[i][1];
        }
        i = (i + 1) % size;
      }
      return undefined;
    }
  
    function remove(key) {
      const index = hash(key);
      let i = index;
      while (table[i] !== undefined) {
        if (table[i][0] === key) {
          table[i] = undefined;
          return true;
        }
        i = (i + 1) % size;
      }
      return false;
    }
  
    return { set, get, remove };
  }
  
  const ht = createHashTable(10);
  
  ht.set("Canada", 300);
  ht.set("France", 100);
  ht.set("Germany", 200);
  ht.set("Spain", 150);
  
  console.log(ht.get("Canada")); // Output: 300
  console.log(ht.get("France")); // Output: 100
  console.log(ht.get("Germany")); // Output: 200
  console.log(ht.get("Spain")); // Output: 150
  
  console.log(ht.remove("Germany")); // Output: true
  console.log(ht.get("Germany")); // Output: undefined
  