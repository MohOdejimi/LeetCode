/*Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k. */

// My Solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    for(let j = 1; j < nums.length; j++) {
       if(nums[i] !== nums[j]) {
         i++
         nums[i] = nums[j]
       }
   };
   let k = i + 1
   const uniqueElements = []
   for(let i = 0; i < k; i++) {
       uniqueElements[i] = nums[i]
    }
   return uniqueElements.length 
}