/* 
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 

Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters. */


// My Solution

function firstUniqChar(s) {
  let hashMap = new Map()
  let n = s.length
  for (let i = 0; i < n; i++) {
    let currentChar = s[i]
    if (hashMap.has(currentChar)) {
      let freq = hashMap.get(currentChar)
      hashMap.set(currentChar, freq + 1)
    } else {
      hashMap.set(currentChar, 1)
    }
  }
  for (let i = 0; i < n; i++) {
    let char = s[i]
    let freq = hashMap.get(char)
    if (freq === 1) return i
  }
  return -1
}