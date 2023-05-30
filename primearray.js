let a=[1,2,3,4,5,6,7]
let n=a.length
for(let i=0;i<n;i++){
    flag=0
    if(a[i]!=1){
        for(let j=2;j<a[i];j++){
            if(a[i]%j==0){
                flag=1
            }
        }
        if(flag==0){
            console.log(a[i])
        }
    }
}