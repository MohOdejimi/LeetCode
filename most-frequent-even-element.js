/*. 
  Given an integer array nums, return the most frequent even element.

If there is a tie, return the smallest one. If there is no such element, return -1.

Example 1:

Input: nums = [0,1,2,2,4,4,1]
Output: 2
Explanation:
The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
We return the smallest one, which is 2.

Example 2:
Input: nums = [4,4,4,9,2,4]
Output: 4
Explanation: 4 is the even element appears the most.

Example 3:
Input: nums = [29,47,21,41,13,37,25,7]
Output: -1
Explanation: There is no even element.
 
Constraints:

1 <= nums.length <= 2000
0 <= nums[i] <= 105
*/

// My Solution.

function mostFrequentEvenElement(nums) {
  const sorted = nums.slice().sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) return -1
    if (a % 2 !== 0 && b % 2 === 0) return 1
    return a - b
  })
  const evenNums = sorted.filter(num => num % 2 === 0)
  let counts = []
  let numsCounted = []
  for (let i = 0; i < evenNums.length; i++) {
    let j = i + 1
    let count = 1
    let currentNum = evenNums[i]
    while (evenNums[j] === currentNum) {
      count += 1
      j++
    }

    if (!numsCounted.includes(currentNum)) {
      numsCounted.push(currentNum)
      counts.push(count)
    }
  }
  if (evenNums.length === 0) return -1
  const mostFrequent = Math.max(...counts)
  const indexOfMostFrequent = counts.indexOf(mostFrequent)
  if (indexOfMostFrequent === counts.lastIndexOf(mostFrequent)) {
    return numsCounted[indexOfMostFrequent]
  }
  const check = []
  if (indexOfMostFrequent !== counts.lastIndexOf(mostFrequent)) {
    counts.map((num, index) => {
      if (num === mostFrequent) check.push(numsCounted[index])
    })
  }
  return Math.min(...check)
}