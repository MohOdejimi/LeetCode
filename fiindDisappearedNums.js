/*. Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
 */

// My Solution

function findDisapearedNumbers(nums) {
  let setInterface = new Set() 
  let disapeared = [] 
  let n = nums.length 
  
  for(let i = 1; i <= n; i++) {
    setInterface.add(i)
  }
  let range = [...setInterface.values()]
  for(let i = 0; i < range.length; i++) {
    if(!nums.includes(range[i])) disapeared.push(range[i])
  }
  return disapeared
}
