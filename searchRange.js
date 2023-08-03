/*. Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109. */


// My Solution

function searchRange(nums, target) {
  const sorted = nums.slice().sort((a, b) => {
    if (a > b) return 1
    if (b > a) return -1
    return 0
  })
  if (sorted.indexOf(target) === -1) return [-1, -1]
  const index = []
  for (let i = 0; i < sorted.length; i++) {
    let currentValue = sorted[i]
    if (currentValue === target) {
      index.push(i)
    }
  }
  const indices = [index[0], index[index.length - 1]]
  return indices
}