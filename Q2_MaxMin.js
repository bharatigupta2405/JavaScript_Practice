//Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.
function maxMin(A){
    let max=-999999;
    let min=9999999;
    for(let i=0;i<A.length;i++){
        if(A[i]>max){
            max=A[i];
        }
        if(A[i]<min){
            min=A[i];
        }
    }
    console.log("The max element is "+max+" and the min element is "+min);
}
//Time Complexity=O(n), Space Complexity= O(1)
maxMin([10,20,30,23,45,67,28,89,100,200,-90,89])
