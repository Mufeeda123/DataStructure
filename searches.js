//binary-iterative
function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === element) {
      return console.log(middle);
    }
    else if (arr[middle] < element) {
      start = middle + 1;
    }
    else {
      end = middle - 1;
    }
  }
  return console.log("Element is not present in array");
}
binarySearch([2, 3, 6, 8, 10], 9);
//to find the element
function checkElementAtPosition(arr, position) {
  console.log(arr[position]);
}

checkElementAtPosition([1, 2, 3, 4, 5], 3)


//binary-recursive
function recursiveBinarySearch(arr, start, end, element) {
  if (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === element) {
      return console.log(middle);

    }
    if (arr[middle] < element) {
      return recursiveBinarySearch(arr, middle + 1, end, element);
    }else{
    return recursiveBinarySearch(arr, start, middle - 1, element);
  }
}
  return console.log('element not present');
}

const a = [1, 2, 3, 4, 5];
recursiveBinarySearch(a, 0, a.length - 1, 5);

//linear-iterative
function search(arr, length, element) {
  for (let i = 0; i < length; i++){
   if (arr[i] === element) {
    return console.log(i);
  }
}
return console.log('element not present');
}
const arr = [2, 3, 4, 10, 40];
search(arr, arr.length, 10);


//linear-recursive
function linearSearchRecursive(array, size, element) {
  if (size === 0) {
    return console.log("not found ");
  } else if (array[size - 1] === element) {
    return console.log('element at:',size-1);
  } else {
    return linearSearchRecursive(array, size - 1, element);
  }
}

const array = [5, 15, 6, 9, 4];
linearSearchRecursive(array, array.length, 4);