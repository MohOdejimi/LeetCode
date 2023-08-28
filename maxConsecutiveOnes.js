/*. Given a binary array nums,
return the maximum number of consecutive 1 's in the array.

Example 1:
Input: nums = [1, 1, 0, 1, 1, 1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1 s.The maximum number of consecutive 1 s is 3.

Example 2:
 Input: nums = [1, 0, 1, 1, 0, 1]
Output: 2


Constraints:
  1 <= nums.length <= 105
nums[i] is either 0 or 1. */

// My Solution

function maxConsecutiveOnes(nums) {
  let maxLength = 0
  let currentLength = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentLength++
    } else {
      maxLength = Math.max(maxLength, currentLength)
      currentLength = 0
    }
  }

  return Math.max(maxLength, currentLength)
}