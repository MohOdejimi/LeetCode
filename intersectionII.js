/*. 350. Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once? */

// My Solution 

function intersecet(nums1, nums2) {
  let nums1Hash = new Map() 
  let nums2Hash = new Map() 
  
  for(let i = 0; i < nums1.length; i++) {
    let currentNum = nums1[i] 
    
    if(nums1Hash.has(currentNum)) {
      let freq = nums1Hash.get(currentNum) 
      nums1Hash.set(currentNum, freq + 1) 
    } else {
      nums1Hash.set(currentNum, 1)
    }
  } 
  
  for (let i = 0; i < nums2.length; i++) {
    let currentNum = nums2[i]
  
    if (nums2Hash.has(currentNum)) {
      let freq = nums2Hash.get(currentNum)
      nums2Hash.set(currentNum, freq + 1)
    } else {
      nums2Hash.set(currentNum, 1)
    }
  }
  const nums1Distinct = [...new Set(nums1)]
  
  for(let i = 0; i < nums1Distinct.length; i++) {
    let currentNum = nums1Distinct[i] 
    if(nums2Hash.has(currentNum)) {
      let minumumCount = Math.min(nums2Hash.get(currentNum), nums1Hash.get(currentNum))
      output.push(...Array(minumumCount).fill(currentNum))
    }
  }
  return output
}