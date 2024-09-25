//Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

//1st way;
function reverse(A){
    temp=[];
    for(let i=A.length-1;i>=0;i--){
        temp.push(A[i]);
    }
    console.log(temp);
}
//Time Complexity= O(n);
//Space Complexity= O(n);
reverse([10,3,23,45,89,29]);
// !<-----------------------------2nd way-------------------------------------------->
function reverse(A){
    let left=0;
    let right=A.length-1;
    while(left<right){
        temp=A[left];
        A[left]=A[right];
        A[right]=temp;
        left++;
        right--;
    }
    console.log("The Reversed Array is :-"+ A);
}
//Time Complexity= O(n/2);~O(n)
//Space Complexity= O(1);
reverse([10,3,23,45,89,29]);
// !<-----------------------------3rd way-------------------------------------------->
function reverse(A){
    let left=0;
    let right=A.length-1;
    while(left<right){
       [A[left],A[right]]=[A[right],A[left]]
       left++;
       right--;
    }
    console.log("The Reversed Array is :-"+ A);
}
//Time Complexity= O(n/2);~O(n)
//Space Complexity= O(1);
reverse([10,3,23,45,89,29]);
// !<-----------------------------4th way-------------------------------------------->

function reverse(A){
    A.reverse()
    console.log("The Reversed Array is :-"+ A);
}
//Time Complexity= O(n)
//Space Complexity= O(1);
reverse([10,3,23,45,89,29]);
