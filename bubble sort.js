function bubbleSort(arr) {
    const len = arr.length;
    // let isSwapped;
    for (let i = 0; i < len; i++) {
        // isSwapped = false;
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                // isSwapped = true;
            }
        }
        // if (isSwapped === false) {
        //     break;
        // }
    }
    console.log(arr);
}
const arr = [243, 45, 23, 356, 3, 5346, 35, 5];
bubbleSort(arr); 