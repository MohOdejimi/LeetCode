/*. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.  */

// My Solution

function twoSum(nums, target) {
  const copy = nums.slice()
  const sort = nums.slice().sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    if (a === b) return 0
  })
  const max = sort[sort.length - 1]
  for (let i = 0; i < sort.length; i++) {
    let currentNum = sort[i]
    let diff = target - currentNum

    if (diff <= max) {
      let j = sort.length - 1
      while (j > i) {
        if (sort[j] === diff) {
          return [copy.indexOf(currentNum), copy.lastIndexOf(sort[j])]
        }
        j--
      }
    }
  }
  return [-1, -1]
}