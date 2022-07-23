// Q1. Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// 数字（ネガティブではない）と文字を含む配列から、文字を省いた数字のみの配列を返すファンクションを作りなさい。

function filter_list(l) {
    return l.filter(Number.isInteger);
};
console.log(filter_list([1,5,'summer',0,'fall',55,103])); // Output -> [1, 5, 0, 55, 103] (5)

// Q2. Given an array of integers, find the one that appears an odd number of TimeRanges.
// 数字の配列の中から、奇数の回数ぶん表示される数字を返す。
// key:) Find the frequencies, then find which ones are odd.

function findOdd(A) {
    let count = 0;
    for(let i = 0; i < A.length; i++) {
        for(let j = 0; j < A.length; j++) {
            if(A[i] == A[j]) {
                count++;
            }
        }
        if(count % 2 != 0) {
            return A[i];
        }
    }
};
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
console.log(findOdd([0,1,0,1,0])); //0
console.log(findOdd([1,2,9,1,9,9])); //2
