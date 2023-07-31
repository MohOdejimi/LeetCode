/* 
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 
Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]

Example 3:

Input: nums = [1,2]
Output: [1,2]
 
Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
*/
// My Solution

function findMajority(nums) {
  if (nums.length === 0) return nums
  const sorted = nums.slice().sort((a, b) => {
    if (a > b) return 1
    if (b > a) return -1
    return 0
  })
  const size = sorted.length
  const fraction = size / 3
  let result = []
  for (let i = 0; i < size; i++) {
    let currentNum = sorted[i]
    let j = i
    let count = 0
    while (sorted[j] === currentNum) {
      count += 1
      j++
    }
    if (count > fraction && (!result.includes(currentNum))) result.push(currentNum)
  }
  return result
}