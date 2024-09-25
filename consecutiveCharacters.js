/*  1446. Consecutive Characters

The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.

Example 1:
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:
Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 

Constraints:
1 <= s.length <= 500
s consists of only lowercase English letters.*/



// My Solution

function maxPower(s) {
  let left = 0
  let power = 0

  for (let right = 0; right < s.length; right++) {
    while (s[left] !== s[right]) {
      left++
    }
    power = Math.max(power, right - left + 1)
  }
  return power
}