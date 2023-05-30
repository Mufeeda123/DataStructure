function quickSort(array) { 
    if (array.length <= 1) { 
      return array; 
    } 
    const pivot = array[array.length - 1]; 
    const left = []; 
    const right = []; 
    for (let i = 0; i < array.length - 1; i++) { 
      if (array[i] < pivot) { 
        left.push(array[i]); 
      } else { 
        right.push(array[i]); 
      } 
    } 
    return [...quickSort(left), pivot, ...quickSort(right)]; 
  } 
  const unsortedArray = [4, 2, 6, 8, 3, 1, 5, 7]; 
  const sortedArray = quickSort(unsortedArray); 
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8] 