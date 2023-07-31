/*.Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109 */

// My Solution 

function findMajority(nums) {
  const sorted = nums.slice().sort((a, b) => {
    if (a > b) return 1
    if (b > a) return -1
    return 0
  })
  let countArray = []
  const size = nums.length
  const half_size = (size / 2)

  for (let i = 0; i < sorted.length; i++) {
    let currentValue = sorted[i]
    let j = i
    let count = 0
    while (sorted[j] === currentValue) {
      count += 1
      j++
    }
    if (count > half_size) {
      return currentValue
    }
  }
}