/*  643. Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:
Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:
n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104 */


// My Solution

function findMaxAverage(nums, k) {
  let n = nums.length;
  let left = 0
  let right = 0
  let windowSum = 0
  let maxAverage = Number.NEGATIVE_INFINITY

  while (right < n) {
    windowSum += nums[right]
    right++

    if (right - left >= k) {
      const average = windowSum / k
      maxAverage = Math.max(average, maxAverage)
      windowSum -= nums[left]
      left++
    }
  }
  return maxAverage
}