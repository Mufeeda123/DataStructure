// let arr=[1,2,3,4,5]
// function reversing(arr){
//     let temp
//     for(let i=arr.length-1;i>=0;i--){
//         for(let j=i;j>=0;j--){
//             if(i!=j){
//                 temp=arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//             }
//         }
//     }

// }
// reversing(arr)

function reversing(arr){
    let start=0;
    let end=arr.length-1;

    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp

        start++;
        end--;
    }
}
let arr=[1,2,3,4,5];
reversing(arr);
console.log(arr);