/* 
Count Occurrences in Sorted Array
Problem Statement: You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.

Examples
Example 1:
  Input: N = 7, X = 3, array[] = { 2, 2, 3, 3, 3, 3, 4 }
Output: 4
Explanation: 3 is occurring 4 times in
  the given array so it is our answer.

Example 2:
  Input: N = 8, X = 2, array[] = { 1, 1, 2, 2, 2, 2, 2, 3 }
Output: 5
Explanation: 2 is occurring 5 times in the given array so it is our answer. */


// My Solution

function countOccurence(nums, target) {
  let n = nums.length;
  let first;
  let last;
  let left = 0
  let right = n - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      right = mid - 1
      first = mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (first) {
    let left = first;
    let right = n - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        left = mid + 1
        last = mid
      } else {
        right = mid - 1
      }
    }
  }
  return last - first + 1
}