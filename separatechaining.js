// class hash{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index] 
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const sameKey = bucket.find(item => item[0]===key)
//             if(sameKey){
//                 sameKey[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index] 
//         if(bucket){
//             const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//         }
//     }
//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index] 
//         if(bucket){
//             const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                bucket.splice(bucket.indexOf(sameKey),1)
//             }
//         }
//     }
//     display(){
//         for(let i =0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// let table =  new hash(50)
// table.set("name","gokul")
// table.set("mzne","sarath")
// table.set("mark",10)
// table.remove("mark")
// console.log(table.get("mark"));
// table.display()
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
      if (!table[index]) {
        table[index] = [];
      }
      table[index].push({ key, value });
    }
  
    function get(key) {
      const index = hash(key);
      if (table[index]) {
        for (let i = 0; i < table[index].length; i++) {
          if (table[index][i].key === key) {
            return table[index][i].value;
          }
        }
      }
      return undefined;
    }
  
    function remove(key) {
      const index = hash(key);
  
      if (table[index]) {
        for (let i = 0; i < table[index].length; i++) {
          if (table[index][i].key === key) {
            table[index].splice(i, 1);
            return true;
          }
        }
      }
      return false;
    }
  
    return { set, get, remove };
  }
  
  const ht = createHashTable();
  
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
  