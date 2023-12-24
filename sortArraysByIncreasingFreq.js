 /* 
1636. Sort Array by Increasing Frequency

Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

Example 1:

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
Example 2:

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
Example 3:

Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
 

Constraints:

1 <= nums.length <= 100
-100 <= nums[i] <= 100 */ 

// My Solution

function frequencySort(nums) {
  let numsLength = nums.length; 
  let numsHash = new Map() 
  
  for(let i = 0; i < numsLength; i++) {
    let currentNum = nums[i] 
    if(numsHash.has(currentNum)) {
      let freq = numsHash.get(currentNum) 
      numsHash.set(currentNum, freq + 1)
    } else {
      numsHash.set(currentNum, 1)
    }
  }
  
  let numsFrequencies = [...numsHash.entries()] 
  let sortedNumsFrequencies = numsFrequencies.sort((a, b) => {
    if(a[1] > b[1]) return 1 
    if (a[1] < b[1]) {
      return -1
    } else {
      if(a[0] > b[0]) return -1 
      if(b[0] < a[0]) return 1 
      return 0
    }
  })
  let result = sortedNumsFrequencies.flatMap(([value, frequency]) => Array(frequency).fill(value))
  return result
}

