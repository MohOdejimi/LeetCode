/* Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

 

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
-1000 <= nums1[i], nums2[i] <= 1000 */

// My Solution 

function findDifference(nums1, nums2) {
  let distinctNums1 = new Set(nums1)
  let distinctNums2 = new Set(nums2)
  let result = []
  let nums1Array = [...distinctNums1]
  let nums2Array = [...distinctNums2]

  let diff1 = []
  for (let i = 0; i < nums1Array.length; i++) {
    let currentNum = nums1Array[i]
    if (!distinctNums2.has(currentNum)) {
      diff1.push(currentNum)
    }
  }

  let diff2 = []
  for (let i = 0; i < nums2Array.length; i++) {
    let currentNum = nums2Array[i]
    if (!distinctNums1.has(currentNum)) {
      diff2.push(currentNum)
    }
  }
  return [diff1, diff2]
}