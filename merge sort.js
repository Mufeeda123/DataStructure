function merge(arr, left, mid, right) {
  const leftArr = [];
  const rightArr = [];

  for (let i = left; i <= mid; i++) {
    leftArr.push(arr[i]);
  }
  for (let i = mid + 1; i <= right; i++) {
    rightArr.push(arr[i]);
  }

  let i = 0;
  let j = 0;
  let k = left;   //0
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((right + left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

const arr = [12, 11, 13, 5, 6, 7];
mergeSort(arr, 0, arr.length - 1);
console.log(arr); 