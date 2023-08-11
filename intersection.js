/* Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/

// My Solution

function intersection(nums1, nums2) {
  const result = nums1.filter(num => nums2.indexOf(num) !== -1).sort((a,b) => a - b)
  let i = 0
  for(let j = 1; j < result.length; j++) {
    if(result[i] !== result[j]) {
      i++
      result[i] = result[j]
    }
  }
  let k = i + 1
  let output = []
  for(let i = 0; i < k; i++) {
    output.push(result[i])
  }
  return output
}