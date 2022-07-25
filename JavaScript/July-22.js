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

// Q3. Create a function which returns the number of 'true' values there are in an array.
// 配列の中の’true’の数を返す。
// Note: Return 0 if given an empty array.
//       All array items are of the type bool(true or false).

function countTrue(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === true) {
            count++;
        }
    }
    return count;
}

console.log(countTrue([true, false, true, true])); //3
console.log(countTrue([])); //0

// または、
const countTrue1 = r => r.filter(Boolean).length;
console.log(countTrue1([true, false, true, ,true, true])); //4
console.log(countTrue1([false, true])); //1

// Q4.Write a function redundant that takes in a string str and returns a function that returns str.
// Note: function should return a function, not a string.

function redundant(str) {
    return function() {
        return str;
    }
}
console.log(redundant);

// または、
function redundant2(str) {
    return () => str;
}
console.log(redundant2);

// または、
const redundant3 = str => () => str;
console.log(redundant3);

// Q5. Given an array (or list) of integers, find and return the index of the highest value in the array.
//     整数の配列で、一番高い数字のインデックスを返す。

const arr = [1, 2, 0, 9, 19, 79];
const max = Math.max(...arr); // Get the max value in the array. Use the spread operator (...) to unpack the values from the and pass them as multiple.
const index = arr.indexOf(max); // Call the 'indexOf()' method on the array, passing it the max value.
                                // Note: It returns the index of the first occurrence of the value in the array or '-1' if the value is not found.

console.log(index);

// To get the indexes of all elements with the max value in the array.
// Check if the element at that index is the max value, if it is, push the current index to the 'indexes' array.

const arr2 = [3, 5, 8, 100, 20, 100];
const max2 = Math.max(...arr2);
const indexes = [];

for ( let i = 0; i < arr2.length; i++) {
    if (arr2[i] === max2) {
        indexes.push(i);
    }
}

console.log(indexes);