function swap(arr, index1, index2) {
    const temp = arr[index1]; 
    arr[index1] = arr[index2]; 
    arr[index2] = temp; 
  } 
  function selectionSort(arr) { 
    const length = arr.length; 
    for (let i = 0; i < length - 1; i++) { 
      let minIndex = i; 
      for (let j = i + 1; j < length; j++) { 
        if (arr[j] < arr[minIndex]) { 
          minIndex = j; 
        } 
      } 
      swap(arr, minIndex, i); 
    }
    console.log(arr); 
  } 
  const arr = [64, 25, 12, 22, 11]; 
  selectionSort(arr); 