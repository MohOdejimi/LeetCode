/*.  Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.

Example 1:
Input: num = 33
Output: [10,11,12]
Explanation: 33 can be expressed as 10 + 11 + 12 = 33.
10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].

Example 2:
Input: num = 4
Output: []
Explanation: There is no way to express 4 as the sum of 3 consecutive integers.
 

Constraints:
0 <= num <= 1015  */

// My Solution 

function sumOfThree(num) {
  let midPoint = Math.floor((num + 1)/3)
  
  for(let i = midPoint - 1; i < midPoint + 3; i++) {
    let currentNum = i
    
    if((currentNum + (currentNum + 1) + (currentNum + 2) === num)) return [i, i + 1, i + 2]
  }
  
  return []
}
