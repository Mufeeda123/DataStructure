function createHashTable() {
    const table = new Array(127);
  
    function hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % table.length;
    }
  
    function set(key, value) {
      const index = hash(key);
      table[index] = [key, value];
    }
  
    function get(key) {
      const index = hash(key);
      return table[index];
    }
  
    function remove(key) {
      const index = hash(key);
  
      if (table[index]) {
        table[index] = undefined;
        return true;
      } else {
        return false;
      }
    }
  
    return { set, get, remove };
  }
  
  const ht = createHashTable();
  
  ht.set("Canada", 300);
  ht.set("France", 100);
  ht.set("Canada", 200);
  
  console.log(ht.get("Canada"));
  console.log(ht.get("Canada"));
  console.log(ht.get("France"));
  console.log(ht.remove("Canada"));
  console.log(ht.get("Canadaa"));
  