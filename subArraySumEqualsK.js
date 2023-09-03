/*   Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:
1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107  */

// My Solution

function subArraySum(nums, k) {
  let count = 0
  let n = nums.length
  let mapInterface = new Map()
  mapInterface.set(0, 1)
  let prefixSum = 0

  for (let i = 0; i < n; i++) {
    prefixSum += nums[i]
    let reminader = prefixSum - k

    if (mapInterface.has(reminader)) {
      count += mapInterface.get(reminader)
    }
    mapInterface.set(prefixSum, (mapInterface.get(prefixSum) || 0) + 1)
  }
  return count
}