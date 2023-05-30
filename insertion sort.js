// ITERATIVE

function insertionSort(array) {
  const length = array.length; 

  for (let i = 1; i < length; i++) { 
    const currentElement = array[i]; 
    let currentIndex = i - 1; 
    while (currentIndex >= 0 && array[currentIndex] > currentElement) { 
      array[currentIndex + 1] = array[currentIndex]; 
      currentIndex--; 
    } 
    array[currentIndex + 1] = currentElement; 
  } 
  console.log(array); 
} 
const array = [12, 11, 13, 5, 6]; 
insertionSort(array); 

// RECURSIVE 

// function recursiveInsertionSort(arr, length) { 
//   if (length <= 1) { 
//     return; 
//   } 
//   recursiveInsertionSort(arr, length - 1); 
//   const lastElement = arr[length - 1];
//   let currentIndex = length - 2; 
//   while (currentIndex >= 0 && arr[currentIndex] > lastElement) { 
//     arr[currentIndex + 1] = arr[currentIndex]; 
//     currentIndex--; 
//   } 
//   arr[currentIndex + 1] = lastElement; 
//   if (length === arr.length) { 
//     console.log(arr); 
//   } 
// } 
// const arrayToSort = [12, 11, 13, 5, 6]; 
// recursiveInsertionSort(arrayToSort, arrayToSort.length); 